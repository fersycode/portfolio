// src/components/About/PhotoGallery.jsx
import { useLanguage } from '../../context/LanguageContext';
import photo1 from '../../assets/About/1.jpg';
const PhotoGallery = () => {
  const { t } = useLanguage();

  const photos = [
    {
      src: photo1,
      alt: "Trabajando en proyectos",
      labelKey: "about_photo1",
      icon: "fa-laptop-code"
    },
    {
      src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=400&fit=crop",
      alt: "Diseñando interfaces",
      labelKey: "about_photo2",
      icon: "fa-palette"
    },
    {
      src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop",
      alt: "Espacio de trabajo",
      labelKey: "about_photo3",
      icon: "fa-lightbulb"
    },
    {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
      alt: "Aprendizaje continuo",
      labelKey: "about_photo4",
      icon: "fa-book-open"
    }
  ];

  return (
    <div className="personal-gallery">
      <div className="gallery-header">
        <h3>{t('about_gallery_title')}</h3>
        <p>{t('about_gallery_subtitle')}</p>
      </div>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-item" key={index}>
            <img src={photo.src} alt={photo.alt} />
            <div className="photo-overlay">
              <p className="photo-label">
                <i className={`fas ${photo.icon}`}></i> {t(photo.labelKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
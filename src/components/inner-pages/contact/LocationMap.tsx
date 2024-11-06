const LocationMap = () => {
  return (
    <div className="contact-page-map wow fadeInUp delay-0-2s">
      <div className="our-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24183.467190101077!2d-74.00338900000001!3d40.741491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bee4f555cf%3A0xd91a3b142bcc71dc!2s111%208th%20Ave%2C%20New%20York%2C%20NY%2010011!5e0!3m2!1sen!2sus!4v1730879763021!5m2!1sen!2sus"
          style={{ border: 0, width: "100%" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;

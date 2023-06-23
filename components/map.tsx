import React from 'react'

export default function Map() {
  return (
    <div>
         <div className="hidden md:block mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9882471317214!2d85.2955529746119!3d27.686758126400825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cba89d7bf5%3A0x131df7c674751484!2sThe%20Arbitrary%20Group!5e0!3m2!1sen!2snp!4v1687345091197!5m2!1sen!2snp"
            width="600"
            height="300"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="md:hidden mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9882471317214!2d85.2955529746119!3d27.686758126400825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cba89d7bf5%3A0x131df7c674751484!2sThe%20Arbitrary%20Group!5e0!3m2!1sen!2snp!4v1687345091197!5m2!1sen!2snp"
            width="300"
            height="200"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  )
}

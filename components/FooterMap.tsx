"use client";

export default function FooterMap() {
  const latitude = 35.6892;
  const longitude = 51.389;

  return (
    <div className="w-full h-50 overflow-hidden rounded-xl">
      <iframe
        className="w-full h-full border-0"
        loading="lazy"
        src="https://www.google.com/maps?q=35.7553538,51.333725&z=19&output=embed"
      />
    </div>
  );
}

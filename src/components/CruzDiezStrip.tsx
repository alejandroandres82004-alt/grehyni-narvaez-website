"use client";

export default function CruzDiezStrip() {
  return (
    <div className="w-full h-2 overflow-hidden" aria-hidden="true">
      <div
        className="w-full h-full"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            #1B3A6B 0px,
            #1B3A6B 8px,
            #C8102E 8px,
            #C8102E 16px,
            #F5C518 16px,
            #F5C518 24px,
            #1B1B1B 24px,
            #1B1B1B 28px
          )`,
        }}
      />
    </div>
  );
}

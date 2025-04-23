export default function VeilleTechnologique() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Veille Technologique</h1>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          maxHeight:"300px",
          paddingTop: "56.25%",
          paddingBottom: 0,
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "75%",
            height: "75%",
            top: 0,
            left: 225,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAGlXAj5OKk/0Nv7hhLK_a6ocPjw4hayyw/view?embed"
          
          title="Veille Technologique - Canva"
        ></iframe>
      </div>
    </div>
  );
}

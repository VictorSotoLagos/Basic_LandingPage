import graph from "../../assets/graph.svg";

const Statistics = () => {
  return (
    <section className="px-18 py-18  md:py-20 md:px-30 flex flex-col bg-blue-500 text-white md:h-120">
      {/* Contenedor con dos columnas */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Columna 1 - Imagen */}
        <div className="md:w-2/5 flex justify-center mx-12">
          {graph && (
            <img
              src={graph}
              alt="graph"
              className="w-full h-auto max-w-xs md:max-w-sm"
            />
          )}
        </div>

        {/* Columna 2 - Datos */}
        <div className="md:w-3/5 mt-10 md:mt-0">
          <h2 className="text-4xl font-bold leading-tight">
            Product/Service Statistics
          </h2>
          <p className="py-5 text-lg text-gray-200">Summary Subtitle</p>

          {/* Lista de estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <span className="text-4xl font-bold md:text-5xl">+10K</span>
              <p className="ml-3 text-lg">Active Users</p>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold md:text-5xl">95%</span>
              <p className="ml-3 text-lg">Customer Satisfaction</p>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold md:text-5xl">5 Years</span>
              <p className="ml-3 text-lg">Continuous Growth</p>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold md:text-5xl   ">#1</span>
              <p className="ml-3 text-lg">In Digital Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

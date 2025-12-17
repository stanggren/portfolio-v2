const CV = () => {
  return (
    <div>
      <h1 className="font-bold pb-24">CV</h1>

      <section>
        <h2 className="font-bold">Utbildning</h2>
        <ul className="mt-16">
          <li className="mb-16">
            <h3 className="font-bold">Hola Folkhögskola</h3>
            <p>Ljudkonst: Deep Listening & Text Scores</p>
            <p className="text-sm">2025–2026</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">Umeå Universitet</h3>
            <p>Musikproduktion 1 & 2</p>
            <p className="text-sm">2023–2024</p>
            <p className="text-sm">Ljudteknik, Mixning och mastering, Inspelning och produktion, Musikteori, arrangering och komposition</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">Teknikhögskolan</h3>
            <p>.NET Fullstackutvecklare, Göteborg</p>
            <p className="text-sm">2018–2020</p>
            <p className="text-sm">Programmeringsteknik C#, Databaser med SQL, Webbutveckling backend .NET, Dataåtkomster i .NET, Webbutveckling frontend</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">Hulebäcksgymnasiet</h3>
            <p>Ekonomi-/Samhällsprogrammet, Mölnlycke</p>
            <p className="text-sm">2009–2012</p>
          </li>
        </ul>
      </section>

      <section className="mt-48">
        <h2 className="font-bold">Arbete</h2>
        <ul className="mt-16">
          <li className="mb-16">
            <h3 className="font-bold">Webbutvecklare och tech lead</h3>
            <p>Grebban, Göteborg/Stockholm & remote</p>
            <p className="text-sm">2021–</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">Webbutvecklare – praktik</h3>
            <p>Visit Group, Göteborg</p>
            <p className="text-sm">2019–2020</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">Elevassistent och lärarvikarie</h3>
            <p>Brattåsskolan, Mölndal</p>
            <p className="text-sm">2014–2018</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">Lageransvar</h3>
            <p>Stena Line Nautica, Varberg</p>
            <p className="text-sm">2015–2016</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">Vikarie</h3>
            <p>Internationella Engelska Skolan, Göteborg</p>
            <p className="text-sm">2014</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">Bosatt i Australien</h3>
            <p className="text-sm">2013–2014</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">Kassa</h3>
            <p>Willys, Göteborg</p>
            <p className="text-sm">2011–2013</p>
          </li>
        </ul>
      </section>

      <section className="mt-48">
        <h2 className="font-bold">Övrigt</h2>
        <ul className="mt-16">
          <li className="mb-16">
            <h3 className="font-bold">
              <a href="https://valsforening.se" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                Vals Förening
              </a>
            </h3>
            <p>Medgrundare och medlem</p>
            <p className="text-sm">Driver Vals Galleri</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CV;


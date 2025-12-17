const Audio = () => {
  return (
    <div>
      <h1 className="font-bold pb-24">Audio</h1>
      <section>
        <ul>
          <li className="mb-16">
            <h3 className="font-bold">
              <a href="https://open.spotify.com/album/0YCGEGY6JE5T89NRkN6FFq?si=SSwUFyzBTxmJojL21FrP8Q" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                Tåni Såprano EP
              </a>
            </h3>
            <p>Music</p>
          </li>
          <li className="mb-16">
            <a href="https://soundcloud.com/andreas-stanggren" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-700">
              Individual work
            </a>
            <p>Music and sound art</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">
              <a href="https://store.steampowered.com/app/2646620/White_Hook_River/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                White Hook River
              </a>
            </h3>
            <p>Music & SFX</p>
            <p className="text-sm">Winner of Umeå University Computer Science Game Jam 2024</p>
            <p className="text-sm">
              <a href="https://frostspektrum.itch.io/hookem" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                Play demo on itch.io
              </a>
            </p>
          </li>

        </ul>
      </section>
    </div>
  );
};

export default Audio;


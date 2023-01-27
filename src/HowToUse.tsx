

export const HowToUse = () => {
    require("./HowToUse.css")

    return (
        <div style={{width: "100vw", backgroundColor: "white" }}>
            <article id="360b7952-546b-4be1-ac0a-a20e52a7e4f4" className="page sans"
                style={{ backgroundColor: "white", maxWidth: "800px" }}>
                <header>
                    <h1 className="page-title">Chemické pexeso</h1>
                </header>
                <div className="page-body">
                    <p id="dd9dab97-951b-4bbf-867e-e8114d4d3594" >Toto je návod k použití.

                        <strong>Kód je dostupný zde:&nbsp;</strong>
                        <a href="https://github.com/rostislavLitovkin/pexeso">https://github.com/rostislavLitovkin/pexeso</a>
                    </p>
                    <p id="070890d6-c07f-44b1-bf81-6cee03890bc1" ><strong>Program naleznete zde:&nbsp;
                    </strong><mark className="highlight-orange"><a
                        href="https://rostislavlitovkin.github.io/Pexeso/">https://rostislavlitovkin.github.io/Pexeso/</a></mark>
                    </p>
                    <h2 id="afab4f6b-71a0-4594-a64c-9778ca9e8372" >
                        Jak změnit/přidat více “sad” dílků</h2>
                    <p id="8d93b9b0-31e7-45dc-a0bf-4701fe7320eb" >V githubu (<a
                        href="https://github.com/rostislavLitovkin/pexeso">https://github.com/rostislavLitovkin/pexeso</a>)
                        klikněte na <strong>src</strong>, pak <strong>assets</strong> a následně <strong>texts.json</strong></p>
                    <figure id="c435c091-9cba-43b8-b3a5-8b0666dd6a0b" className="image"><a
                        href="HowToUseAssets/Screenshot_2023-01-26_at_13.50.32.png"><img
                            style={{ width: "1656px" }}
                            src={require("./HowToUseAssets/Screenshot_2023-01-26_at_13.50.32.png")} /></a>
                    </figure>
                    <figure id="bffd2ea5-b4fc-4140-a1f1-6c008bf68ea3" className="image"><a
                        href="HowToUseAssets/Screenshot_2023-01-26_at_13.53.21.png"><img
                            style={{ width: "2224px" }}
                            src={require("./HowToUseAssets/Screenshot_2023-01-26_at_13.53.21.png")} /></a>
                    </figure>
                    <figure id="d41a1a61-fee1-4e26-9f87-b6b619546026" className="image"><a
                        href="HowToUseAssets/Screenshot_2023-01-26_at_13.53.36.png"><img
                            style={{ width: "2260px" }}
                            src={require("./HowToUseAssets/Screenshot_2023-01-26_at_13.53.36.png")} /></a>
                    </figure>
                    <p id="1def48d7-f981-4919-b18d-b363bb9a6348" >Pak se musí kliknout na <strong>ikonku tužky.</strong>
                    </p>
                    <figure id="ad4bc236-0707-4441-9a22-9d6c0f0381f0" className="image"><a
                        href="HowToUseAssets/Screenshot_2023-01-26_at_13.54.17.png"><img
                            style={{ width: "2258px" }}
                            src={require("./HowToUseAssets/Screenshot_2023-01-26_at_13.54.17.png")} /></a>
                    </figure>
                    <p id="27837156-7194-4ec4-8756-25c8450ead93" >a následně se dají “pojmy” přepsat.
                        Nakonec dole napíšete název změny a (přepsat kolonku “update texts.json” a kliknout na zelené tlačítko&nbsp;
                        <strong>commit changes.</strong></p>
                    <figure id="247971e0-ddaa-4a69-8f1c-404282f52921" className="image"><a
                        href="HowToUseAssets/Screenshot_2023-01-26_at_14.03.49.png"><img
                            style={{ width: "2188px" }}
                            src={require("./HowToUseAssets/Screenshot_2023-01-26_at_14.03.49.png")} /></a>
                    </figure>
                    <h2 id="b513d66c-3d67-4830-91bf-81760e349328" >Co jednotlivé pojmy v texts.json znamenají?</h2>
                    <p id="29c89a00-180f-4217-b17e-a14e5a966d20" >name = <strong>název “sady” dílků</strong></p>
                    <p id="dfd6fc24-48a9-481f-b0db-21f0da2dd6d1" >texts = <strong>jednotlivé páry dílků</strong>, musí
                        být ohraničené hranatými závorkami</p>
                    <ul id="159c3593-ca1d-412b-8faa-0d9be24f0a4a" className="bulleted-list">
                        <li style={{ listStyleType: "disc" }}><mark className="highlight-red">Zápisy musí být pečlivě dodržené, aby se
                            kód zvládl správně přečíst a vše fungovalo.
                            To znamená, že musí být dodrženy </mark><mark className="highlight-red"><strong>čárky, hranaté a
                                složené (šišaté) závorky a uvozovky</strong></mark><mark className="highlight-red">. Doporučuju
                                    se zamyslet nad strukturou zápisu a zkusit jí napodobit podle obrázku navrchu.</mark></li>
                    </ul>
                    <p id="70015396-11e1-46dd-9d07-e3bb75ece4c7" >
                    </p>
                    <h2 id="17eaccf6-0e21-4f0f-9e86-f790e74fb26c" >Jak vyslat změny</h2>
                    <p id="bf5d4f78-3460-499e-813b-016963ca7f46" >Tento krok je velice důležitý a nesmí se na něj
                        zapomenout. Pokud by se vynechal, změny by se nepromítly ve finálním programu.</p>
                    <p id="f4dc0a5e-0869-4a59-9193-3751d635f39e" >Stačí se řídit obrázky:</p>
                    <figure id="90fda20a-dbd4-4bea-af19-27a3231483d9" className="image"><a
                        href="HowToUseAssets/Screenshot_2023-01-26_at_14.09.12.png"><img
                            style={{ width: "3024px" }}
                            src={require("./HowToUseAssets/Screenshot_2023-01-26_at_14.09.12.png")} /></a>
                    </figure>
                    <figure id="97c51622-351d-47e6-9efd-83b4e41139fc" className="image"><a
                        href="HowToUseAssets/Screenshot_2023-01-26_at_14.10.29.png"><img
                            style={{ width: "3024px" }}
                            src={require("./HowToUseAssets/Screenshot_2023-01-26_at_14.10.29.png")} /></a>
                    </figure>
                    <p id="0d720b92-277b-4cfd-9b31-a376a4c99da3" >Pak už stačí pouze počkat pár minut a všechny změny se
                        promítnou.
                    </p>
                    <br></br>
                    <br></br>
                </div>
            </article>
        </div>
    )
}
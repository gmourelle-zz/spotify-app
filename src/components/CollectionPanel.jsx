import React, { Component } from "react";

const CollectionsPanel=()=> {
    return (
      <div>
      <div>
              <h2 className="myArtistsTitle">Mis Artistas (2)</h2>
              <ul className="myArtistsList">
                <li className="myArtistsListItem">
                  <div className="smallArtist">
                    <div
                      className="artistImage"
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundImage:
                          "url('https://i.scdn.co/image/c1a1b1ba6e7f40a1ac584481bdd6b3c2f305a35c')"
                      }}
                    />
                    <div className="smallArtistName">Foo Fighters</div>
                  </div>
                </li>
                <li className="myArtistsListItem">
                  <div className="smallArtist">
                    <div
                      className="artistImage"
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundImage:
                          "url('https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09')"
                      }}
                    />
                    <div className="smallArtistName">The Beatles</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
    )
  }

  export default CollectionsPanel;
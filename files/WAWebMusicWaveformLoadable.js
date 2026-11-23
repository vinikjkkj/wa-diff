__d(
  "WAWebMusicWaveformLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")("WAWebMusicWaveform.react")
          .__setRef("WAWebMusicWaveformLoadable")
          .load();
        return e;
      }, "MusicWaveform"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebMusicWaveformLoadable = c;
  },
  98,
);

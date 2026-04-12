__d(
  "WAWebAudioWaveThumbIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "audio-wave-thumb";
    function m(t) {
      var n = t.height,
        a = t.iconXstyle,
        i = t.name,
        l = t.viewBox,
        u = t.width,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p;
      if (l) {
        var _ = l.height,
          f = _ === void 0 ? 0 : _,
          g = l.width,
          h = g === void 0 ? 0 : g,
          y = l.x,
          C = y === void 0 ? 0 : y,
          b = l.y,
          v = b === void 0 ? 0 : b;
        p = [C, v, h, f].join(" ");
      }
      var S = 40,
        R = 40;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 40 40",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M18.1953 31.4492C18.7461 31.4492 19.1562 31.0156 19.1562 30.4883V10.6016C19.1562 10.0625 18.7344 9.64062 18.1953 9.64062C17.6562 9.64062 17.2344 10.0625 17.2344 10.6016V30.4883C17.2344 31.0156 17.6562 31.4492 18.1953 31.4492ZM25.4023 29.1172C25.9531 29.1172 26.3633 28.6953 26.3633 28.1562V12.9336C26.3633 12.3945 25.9414 11.9727 25.4023 11.9727C24.8516 11.9727 24.4414 12.3945 24.4414 12.9336V28.1562C24.4414 28.6953 24.8516 29.1172 25.4023 29.1172ZM14.5859 27.4414C15.1367 27.4414 15.5586 27.0195 15.5586 26.4805V14.6094C15.5586 14.0703 15.1367 13.6484 14.5859 13.6484C14.0469 13.6484 13.6367 14.0703 13.6367 14.6094V26.4805C13.6367 27.0195 14.0469 27.4414 14.5859 27.4414ZM21.8047 25.9648C22.3438 25.9648 22.7539 25.5312 22.7539 25.0039V16.0859C22.7539 15.5469 22.3438 15.125 21.8047 15.125C21.2539 15.125 20.8438 15.5586 20.8438 16.0859V25.0039C20.8438 25.5312 21.2539 25.9648 21.8047 25.9648ZM29 23.9727C29.5508 23.9727 29.9609 23.5508 29.9609 23.0117V18.0781C29.9609 17.5391 29.5508 17.1172 29 17.1172C28.4492 17.1172 28.0391 17.5391 28.0391 18.0781V23.0117C28.0391 23.5508 28.4609 23.9727 29 23.9727ZM10.9883 23.0469C11.5391 23.0469 11.9492 22.625 11.9492 22.0859V19.0039C11.9492 18.4648 11.5273 18.0312 10.9883 18.0312C10.4375 18.0312 10.0273 18.4648 10.0273 19.0039V22.0859C10.0273 22.625 10.4375 23.0469 10.9883 23.0469Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.AudioWaveThumbIcon = m));
  },
  98,
);

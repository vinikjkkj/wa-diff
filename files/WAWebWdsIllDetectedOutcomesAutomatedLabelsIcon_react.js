__d(
  "WAWebWdsIllDetectedOutcomesAutomatedLabelsIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ill-detected-outcomes-automated-labels";
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
      var S = 88,
        R = 88;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p,
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "#E6FFDA",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  d: "M15.5156 9.5464h44.6875c1.0239 0 1.997.1999 2.9258.6006l.3955.1836c.9158.4579 1.685 1.065 2.3135 1.8242l.2607.3349.0049.0069 18.2842 24.3789c.9814 1.2881 1.4717 2.753 1.4717 4.4209 0 1.5636-.4306 2.9485-1.293 4.1767l-.1787.2442-18.2842 24.3789-.0049.0068c-.5887.8029-1.3171 1.4534-2.1914 1.9541l-.3828.2051c-1.0469.5235-2.1513.7842-3.3213.7842H15.5156c-1.9067 0-3.5398-.6287-4.9326-1.9033l-.2754-.2637c-1.4516-1.4516-2.167-3.1741-2.167-5.208v-48.75c0-1.9067.6287-3.5399 1.9033-4.9326l.2637-.2754c1.4516-1.4516 3.1741-2.167 5.208-2.167Z",
                }),
                c.jsx("path", {
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  d: "M59.6563 19.6665c2.7638 2.6333 3.328 7.3232 1.6625 13.034-1.6535 5.6699-5.4575 12.1275-11.0471 17.9945-5.5895 5.8669-11.8555 9.979-17.4388 11.9051-5.6233 1.9398-10.3352 1.6032-13.0991-1.0298-2.764-2.6332-3.3279-7.3233-1.6626-13.034 1.6536-5.6699 5.4569-12.1283 11.0464-17.9952 5.5896-5.867 11.8562-9.9784 17.4395-11.9044 5.6236-1.9399 10.3353-1.6035 13.0992 1.0298Z",
                }),
                c.jsx("path", {
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  d: "M19.7328 19.6655c-2.7637 2.6333-3.3279 7.3232-1.6625 13.034 1.6536 5.6699 5.4576 12.1276 11.0471 17.9945 5.5896 5.867 11.8556 9.9791 17.4388 11.9051 5.6234 1.9398 10.3352 1.6033 13.0992-1.0298 2.7639-2.6332 3.3279-7.3233 1.6625-13.034-1.6535-5.6699-5.4568-12.1282-11.0464-17.9952-5.5895-5.867-11.8562-9.9783-17.4395-11.9044-5.6235-1.9398-10.3352-1.6035-13.0992 1.0298Z",
                }),
                c.jsx("circle", {
                  cx: 39.6948,
                  cy: 40.6177,
                  r: 5.75,
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                }),
                c.jsx("path", {
                  fill: "#FCF5EB",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  d: "M12.4612 60.8257h18.0342c6.2386 0 11.2957 5.0573 11.2959 11.2959 0 6.2387-5.0572 11.2968-11.2959 11.2969H12.4612c-6.2386-.0002-11.296-5.0583-11.296-11.2969.0003-6.2385 5.0575-11.2957 11.296-11.2959Z",
                }),
                c.jsx("path", {
                  fill: "#25D366",
                  stroke: "#111B21",
                  strokeMiterlimit: 10,
                  strokeWidth: 1.5,
                  d: "M29.2484 79.0698c3.8391 0 6.95-3.111 6.95-6.9501 0-3.8391-3.1131-6.9478-6.95-6.9478s-6.9501 3.1109-6.9501 6.95 3.111 6.9501 6.9501 6.9501v-.0022Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsIllDetectedOutcomesAutomatedLabelsIcon = m));
  },
  98,
);

__d(
  "WDSIconWdsIcAiFilled.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-ai-filled";
    function m(t) {
      var n = t.height,
        o = t.iconXstyle,
        a = t.viewBox,
        i = t.width,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u;
      if (a) {
        var m = a.height,
          p = m === void 0 ? 0 : m,
          _ = a.width,
          f = _ === void 0 ? 0 : _,
          g = a.x,
          h = g === void 0 ? 0 : g,
          y = a.y,
          C = y === void 0 ? 0 : y;
        u = [h, C, f, p].join(" ");
      }
      var b = 24,
        v = 24;
      return (
        (n != null || i != null) && ((b = n), (v = i)),
        c.jsx(
          r("WDSSvgComponentBase.react"),
          babelHelpers.extends({}, l, {
            children: c.jsxs("svg", {
              viewBox: u != null ? u : "0 0 24 24",
              height: b,
              width: v,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(o),
              fill: "currentColor",
              children: [
                c.jsx("title", { children: d }),
                c.jsx("path", {
                  d: "M15.6308 4.72728C15.6308 6.23351 14.4103 7.45455 12.9046 7.45455C11.399 7.45455 10.1785 6.23352 10.1785 4.72728C10.1785 3.22104 11.399 2 12.9046 2C14.4103 2 15.6308 3.22105 15.6308 4.72728Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M20.0943 6.15827C20.4524 6.2704 20.7236 6.56517 20.8056 6.93156L21.9746 12.1529C22.0566 12.5193 21.937 12.9016 21.6609 13.1559C21.3847 13.4101 20.9939 13.4977 20.6358 13.3855L15.5313 11.7876C15.1732 11.6755 14.902 11.3807 14.82 11.0143C14.7379 10.6479 14.8575 10.2656 15.1337 10.0114L19.0692 6.38796C19.3453 6.1337 19.7361 6.04614 20.0943 6.15827Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M7.86289 9.00011C8.22737 8.15148 9.4331 8.15148 9.79758 9.00011L11.1903 12.2424C11.2969 12.4904 11.4947 12.6878 11.7432 12.7941L14.9929 14.1837C15.8434 14.5473 15.8434 15.7503 14.9929 16.114L11.7432 17.5036C11.4947 17.6099 11.2969 17.8073 11.1903 18.0552L9.76927 21.3636C9.40911 22.2021 8.22211 22.215 7.84374 21.3845L6.31737 18.0342C6.21025 17.7991 6.02005 17.6115 5.78312 17.5076L2.6286 16.1227C1.78605 15.7529 1.79181 14.5581 2.6379 14.1963L5.9173 12.7941C6.16571 12.6878 6.36364 12.4904 6.4701 12.2424L7.86289 9.00011Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);

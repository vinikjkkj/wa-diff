__d(
  "WAWebIcChatlistEventIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-chatlist-event";
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
      var S = 20,
        R = 16;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 16 20",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M10.0048 15C9.44604 15 8.97222 14.8072 8.58333 14.4215C8.19444 14.0356 8 13.5634 8 13.0048C8 12.446 8.19285 11.9722 8.57854 11.5833C8.96438 11.1944 9.4366 11 9.99521 11C10.554 11 11.0278 11.1928 11.4167 11.5785C11.8056 11.9644 12 12.4366 12 12.9952C12 13.554 11.8072 14.0278 11.4215 14.4167C11.0356 14.8056 10.5634 15 10.0048 15ZM2.5 18C2.0875 18 1.73437 17.8507 1.44062 17.5521C1.14687 17.2535 1 16.9028 1 16.5V5.5C1 5.09722 1.14687 4.74653 1.44062 4.44792C1.73437 4.14931 2.0875 4 2.5 4H4V2.75C4 2.5375 4.07146 2.35937 4.21438 2.21562C4.35729 2.07187 4.53438 2 4.74563 2C4.95688 2 5.13542 2.07187 5.28125 2.21562C5.42708 2.35937 5.5 2.5375 5.5 2.75V4H10.5V2.75C10.5 2.5375 10.5715 2.35937 10.7144 2.21562C10.8573 2.07187 11.0344 2 11.2456 2C11.4569 2 11.6354 2.07187 11.7812 2.21562C11.9271 2.35937 12 2.5375 12 2.75V4H13.5C13.9125 4 14.2656 4.14931 14.5594 4.44792C14.8531 4.74653 15 5.09722 15 5.5V16.5C15 16.9028 14.8531 17.2535 14.5594 17.5521C14.2656 17.8507 13.9125 18 13.5 18H2.5ZM2.5 16.5H13.5V9H2.5V16.5Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.IcChatlistEventIcon = m));
  },
  98,
);

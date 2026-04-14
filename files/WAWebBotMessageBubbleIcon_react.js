__d(
  "WAWebBotMessageBubbleIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "bot-message-bubble";
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
      var S = 24,
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 24",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M19.6992 4.53666C20.3997 4.53666 20.9675 3.96881 20.9675 3.26833C20.9675 2.56785 20.3997 2 19.6992 2C18.9987 2 18.4309 2.56785 18.4309 3.26833C18.4309 3.96881 18.9987 4.53666 19.6992 4.53666ZM23.1067 3.94819C23.2746 4.00073 23.4017 4.13883 23.4402 4.31049L23.988 6.75675C24.0265 6.9284 23.9704 7.10753 23.841 7.22665C23.7116 7.34577 23.5284 7.38679 23.3605 7.33426L20.9681 6.58561C20.8002 6.53308 20.6731 6.39498 20.6346 6.22332C20.5962 6.05166 20.6522 5.87254 20.7817 5.75341L22.6263 4.0558C22.7557 3.93668 22.9388 3.89566 23.1067 3.94819ZM17.8107 5.6414C17.6323 5.2263 17.0423 5.2263 16.864 5.6414L16.1825 7.2273C16.1304 7.34858 16.0335 7.44514 15.912 7.49712L14.3072 8.18298C13.8932 8.35998 13.8904 8.94435 14.3027 9.12525L15.8463 9.80264C15.9622 9.85349 16.0553 9.94522 16.1077 10.0602L16.8546 11.6989C17.0398 12.1052 17.6206 12.0989 17.7968 11.6887L18.4922 10.0705C18.5443 9.94923 18.6411 9.85266 18.7627 9.80068L20.3529 9.12099C20.7691 8.94311 20.7691 8.35469 20.3529 8.17682L18.7627 7.49712C18.6411 7.44514 18.5443 7.34858 18.4922 7.2273L17.8107 5.6414ZM13 4C13.5523 4 14 4.44772 14 5C14 5.55228 13.5523 6 13 6H3.53237L4.99999 8.44603V17.3333C4.99999 17.7015 5.29847 18 5.66666 18H19.3333C19.7015 18 20 17.7015 20 17.3333V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V17.3333C22 18.8061 20.8061 20 19.3333 20H5.66666C4.1939 20 2.99999 18.8061 2.99999 17.3333V9L0.908687 5.5145C0.508773 4.84797 0.988885 4 1.76618 4H13Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.BotMessageBubbleIcon = m));
  },
  98,
);

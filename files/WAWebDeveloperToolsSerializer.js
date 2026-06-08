__d(
  "WAWebDeveloperToolsSerializer",
  ["WAAckLevel", "WAWebWid", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        span: { wordBreak: "xdnwjd9", $$css: !0 },
        unset: { color: "xhslqc4", fontFamily: "x1ey7xld", $$css: !0 },
        boolean: {
          borderStartStartRadius: "x13t61ll",
          borderStartEndRadius: "x1kchd1x",
          borderEndEndRadius: "x1u0fnx4",
          borderEndStartRadius: "xbxn0j6",
          $$css: !0,
        },
        true: { backgroundColor: "xs9v28o", $$css: !0 },
        false: { backgroundColor: "x17v13r8", $$css: !0 },
        paddingHoriz4: {
          paddingInlineStart: "x181vq82",
          paddingInlineEnd: "x1uc92m",
          $$css: !0,
        },
      };
    function d(e) {
      for (var t of Object.entries(o("WAAckLevel").ACK)) {
        var n = t[0],
          r = t[1];
        if (r === e) return n;
      }
      return f(e);
    }
    function m(e) {
      if (typeof e == "number" && e) {
        var t = new Date(e);
        return t.getFullYear() === 1970
          ? new Date(e * 1e3).toUTCString()
          : t.toUTCString();
      }
      return f(e);
    }
    function p(e) {
      return Array.isArray(e) ? f(e.length + " messages") : f(e);
    }
    function _(e) {
      return e instanceof r("WAWebWid") ? f(e.toString()) : f(e);
    }
    function f(t) {
      return u.jsx(
        "span",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            c.span,
            t == null && c.unset,
            typeof t == "boolean" && c.boolean,
            typeof t == "boolean" && c.paddingHoriz4,
            typeof t == "boolean" && (t === !0 ? c.true : c.false),
          ),
          { children: typeof t == "string" ? String(t) : JSON.stringify(t) },
        ),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = new Map([
      ["ack", d],
      ["t", m],
      ["ts", m],
      ["tcTokenTimestamp", m],
      ["tcTokenSenderTimestamp", m],
      ["lastSuccessfulSyncEndTime", m],
      ["phoneNumberCreatedAt", m],
      ["timestamp", m],
      ["subjectTime", m],
      ["descTime", m],
      ["creationTime", m],
      ["to", _],
      ["author", _],
      ["msgs", p],
    ]);
    function h(e, t) {
      var n,
        r = g.get(e);
      return (n = r == null ? void 0 : r(t)) != null ? n : f(t);
    }
    l.default = h;
  },
  98,
);

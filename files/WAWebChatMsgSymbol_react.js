__d(
  "WAWebChatMsgSymbol.react",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMessageFailIcon.react",
    "WAWebMessagePluginRenderPreviewIcon",
    "WAWebMsgGetters",
    "WAWebSystemMessagePluginRenderPreviewIcon",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        container: {
          display: "x1rg5ohu",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          color: "xhslqc4",
          verticalAlign: "x16dsc37",
          height: "x1qx5ct2",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(13),
        a = t.msg,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebMsgGetters").getType,
            o("WAWebMsgGetters").getSubtype,
            o("WAWebFrontendMsgGetters").getMediaData,
          ]),
          (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebMsgValues").useOptionalMsgValues(a.id, i),
        s = l != null ? l[0] : a.type,
        d = l != null ? l[1] : a.subtype,
        m = l != null ? l[2] : a.mediaData,
        p;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {})),
          (n[1] = p))
        : (p = n[1]);
      var _ = p;
      if (t.overrideIcon != null) _ = t.overrideIcon;
      else {
        var f;
        n[2] !== a
          ? ((f = o(
              "WAWebSystemMessagePluginRenderPreviewIcon",
            ).renderPreviewIcon({ msg: a })),
            (n[2] = a),
            (n[3] = f))
          : (f = n[3]);
        var g = f;
        if (g != null) _ = g;
        else {
          var h = m == null ? void 0 : m.parsedVcards,
            y;
          n[4] !== a ||
          n[5] !== t.viewOnceStatic ||
          n[6] !== d ||
          n[7] !== h ||
          n[8] !== s
            ? ((y = o("WAWebMessagePluginRenderPreviewIcon").renderPreviewIcon(
                s,
                d,
                {
                  msg: a,
                  options: {
                    parsedVcards: h,
                    viewOnceStatic: t.viewOnceStatic,
                  },
                },
              )),
              (n[4] = a),
              (n[5] = t.viewOnceStatic),
              (n[6] = d),
              (n[7] = h),
              (n[8] = s),
              (n[9] = y))
            : (y = n[9]);
          var C = y;
          C != null && (_ = C);
        }
      }
      var b;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = (e || (e = r("stylex"))).props(
            c.container,
            o("WAWebUISpacing").uiMargin.end3,
          )),
          (n[10] = b))
        : (b = n[10]);
      var v;
      return (
        n[11] !== _
          ? ((v = u.jsx(
              "div",
              babelHelpers.extends({}, b, {
                "data-testid": void 0,
                children: _,
              }),
            )),
            (n[11] = _),
            (n[12] = v))
          : (v = n[12]),
        v
      );
    }
    l.default = d;
  },
  98,
);

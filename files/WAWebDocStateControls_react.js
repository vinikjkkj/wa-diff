__d(
  "WAWebDocStateControls.react",
  [
    "WAWebAttachmentLoaderButton.react",
    "WAWebAudioCancelNoborderIcon.react",
    "WAWebAudioDownloadIcon.react",
    "WAWebAudioUploadIcon.react",
    "WAWebSpinner.react",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.onClick,
        a;
      t[0] !== r
        ? ((a = r ? { onClick: r } : {}), (t[0] = r), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l =
            "x6s0dn4 x1sj5et5 x78zum5 x1okw0bk x90ne7k xl56j7k x1n2onr6 x1691je0"),
          (t[2] = l))
        : (l = t[2]);
      var u;
      return (
        t[3] !== n || t[4] !== i
          ? ((u = s.jsx(
              "div",
              babelHelpers.extends({ className: l }, i, { children: n }),
            )),
            (t[3] = n),
            (t[4] = i),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onClick,
        r = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_loader_button_uix_improvement",
        );
      if (r) {
        var a;
        return (
          t[0] !== n
            ? ((a = s.jsx(
                o("WAWebAttachmentLoaderButton.react").DownloadButton,
                { onPress: n },
              )),
              (t[0] = n),
              (t[1] = a))
            : (a = t[1]),
          a
        );
      }
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s.jsx(o("WAWebAudioDownloadIcon.react").AudioDownloadIcon, {})),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== n
          ? ((l = s.jsx(u, { onClick: n, children: i })),
            (t[3] = n),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    var d = { color: "progress" };
    function m(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.canCancel,
        r = e.onClick,
        a = e.outgoingMsg,
        i = e.value,
        l = n === void 0 ? !1 : n,
        c = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_loader_button_uix_improvement",
        );
      if (c) {
        var m = i != null ? i / 100 : 0,
          p = l ? r : void 0,
          _;
        return (
          t[0] !== m || t[1] !== p
            ? ((_ = s.jsx(o("WAWebAttachmentLoaderButton.react").LoaderButton, {
                onPress: p,
                progress: m,
              })),
              (t[0] = m),
              (t[1] = p),
              (t[2] = _))
            : (_ = t[2]),
          _
        );
      }
      var f;
      t[3] !== a || t[4] !== i
        ? ((f = i == null ? { outgoingMsg: a } : d),
          (t[3] = a),
          (t[4] = i),
          (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { className: "x14q0ukc x10l6tqk xnfr1j" }), (t[6] = h))
        : (h = t[6]);
      var y;
      t[7] !== g || t[8] !== i
        ? ((y = s.jsx(
            "div",
            babelHelpers.extends({}, h, {
              children: s.jsx(
                o("WAWebSpinner.react").Spinner,
                babelHelpers.extends({ stroke: 3, size: 32, value: i }, g),
              ),
            }),
          )),
          (t[7] = g),
          (t[8] = i),
          (t[9] = y))
        : (y = t[9]);
      var C;
      t[10] !== l
        ? ((C = l
            ? s.jsx(
                o("WAWebAudioCancelNoborderIcon.react").AudioCancelNoborderIcon,
                {},
              )
            : null),
          (t[10] = l),
          (t[11] = C))
        : (C = t[11]);
      var b;
      return (
        t[12] !== y || t[13] !== C
          ? ((b = s.jsxs(u, { children: [y, C] })),
            (t[12] = y),
            (t[13] = C),
            (t[14] = b))
          : (b = t[14]),
        b
      );
    }
    function p() {
      var e = o("react-compiler-runtime").c(2),
        t = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_loader_button_uix_improvement",
        );
      if (t) {
        var n;
        return (
          e[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = s.jsx(
                o("WAWebAttachmentLoaderButton.react").UploadButton,
                {},
              )),
              (e[0] = n))
            : (n = e[0]),
          n
        );
      }
      var r;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = s.jsx(u, {
              children: s.jsx(
                o("WAWebAudioUploadIcon.react").AudioUploadIcon,
                {},
              ),
            })),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    ((l.Download = c), (l.Pending = m), (l.Upload = p));
  },
  98,
);

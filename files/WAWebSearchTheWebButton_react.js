__d(
  "WAWebSearchTheWebButton.react",
  [
    "WAWebDropdownItem.react",
    "WAWebModalManager",
    "WAWebSearchTheWebCommonUtils",
    "WAWebSearchTheWebEventLogger",
    "WAWebWamEnumStwInteraction",
    "WAWebWebSearchPopup.react",
    "WDSIconIcSearch.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.entryPoint,
        a = e.messageType,
        i = e.msg,
        l = e.stwFormat,
        u;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l
        ? ((u = function () {
            (o("WAWebSearchTheWebEventLogger").logSTWEvent({
              stwEntryPoint: n,
              stwFormat: l,
              stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION
                .ENTRY_POINT_CLICKED,
              messageType: a,
            }),
              o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebWebSearchPopup.react"), {
                  message: i,
                  entryPoint: n,
                  stwFormat: l,
                }),
              ));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = u))
        : (u = t[4]);
      var c = u,
        d,
        m;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s.jsx(r("WDSIconIcSearch.react"), {})),
          (m = o("WAWebSearchTheWebCommonUtils").getHFMHeaderCTAText()),
          (t[5] = d),
          (t[6] = m))
        : ((d = t[5]), (m = t[6]));
      var p;
      return (
        t[7] !== c
          ? ((p = s.jsx(o("WAWebDropdownItem.react").DropdownItem, {
              action: c,
              icon: d,
              children: m,
            })),
            (t[7] = c),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    l.default = u;
  },
  98,
);

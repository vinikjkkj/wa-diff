__d(
  "WAWebChatlistWrappedItem.react",
  [
    "fbt",
    "WAWebChatCheckboxWrapper.react",
    "WAWebChatModel",
    "WAWebErrorBoundary.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.children,
        a = e.mode,
        i = e.model,
        l = e.multiSelection,
        c = e.onArrowKeyInChatItem,
        d = e.onSelect,
        m = e.selectableState,
        p = e.setCheckboxWrapperRef;
      if (!m) {
        var _;
        return (
          t[0] !== n
            ? ((_ = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                name: "chat-list-item",
                children: n,
              })),
              (t[0] = n),
              (t[1] = _))
            : (_ = t[1]),
          _
        );
      }
      var f = "selectable-chat-list-item-" + a,
        g = i instanceof o("WAWebChatModel").Chat ? i.formattedTitle : null,
        h;
      t[2] !== i.id || t[3] !== p
        ? ((h = function (t) {
            return void p(i.id.toString(), t);
          }),
          (t[2] = i.id),
          (t[3] = p),
          (t[4] = h))
        : (h = t[4]);
      var y;
      t[5] !== i.id || t[6] !== c
        ? ((y = function () {
            return c(i.id.toString());
          }),
          (t[5] = i.id),
          (t[6] = c),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] !== g
        ? ((C = s._(/*BTDS*/ "Select chat {chat-name}", [
            s._param("chat-name", g),
          ])),
          (t[8] = g),
          (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] !== n ||
      t[11] !== i ||
      t[12] !== l ||
      t[13] !== d ||
      t[14] !== m ||
      t[15] !== h ||
      t[16] !== y ||
      t[17] !== C
        ? ((b = u.jsx(r("WAWebChatCheckboxWrapper.react"), {
            ref: h,
            model: i,
            theme: "chat-checkbox",
            selectableState: m,
            multiSelection: l,
            onSelect: d,
            onArrowKeyLeftRight: y,
            checkboxAriaLabel: C,
            role: "gridcell",
            children: n,
          })),
          (t[10] = n),
          (t[11] = i),
          (t[12] = l),
          (t[13] = d),
          (t[14] = m),
          (t[15] = h),
          (t[16] = y),
          (t[17] = C),
          (t[18] = b))
        : (b = t[18]);
      var v;
      return (
        t[19] !== f || t[20] !== b
          ? ((v = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: f,
              children: b,
            })),
            (t[19] = f),
            (t[20] = b),
            (t[21] = v))
          : (v = t[21]),
        v
      );
    }
    l.default = c;
  },
  226,
);

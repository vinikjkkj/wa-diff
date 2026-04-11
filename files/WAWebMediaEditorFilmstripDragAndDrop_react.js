__d(
  "WAWebMediaEditorFilmstripDragAndDrop.react",
  [
    "CometDraggableList.react",
    "CometDraggableListItemKeyboardHandler.react",
    "WAArrayMove",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorFilmstripAdCreationAttachMediaThumb.react",
    "WAWebMediaEditorFilmstripAttachMediaThumb.react",
    "WAWebMsgType",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.className,
        a = e.maxFiles,
        i = e.mediaCollection,
        l = e.onClick,
        u = e.onClose,
        c = e.onElementRef,
        d = e.theme,
        m = r("useWAWebIsKeyboardUser")(),
        p = m.isKeyboardUser,
        _;
      if (
        t[0] !== p ||
        t[1] !== a ||
        t[2] !== i ||
        t[3] !== l ||
        t[4] !== u ||
        t[5] !== c ||
        t[6] !== d
      ) {
        var f = i.getPreviewableMedias(),
          g = a != null && a > 0 ? f.slice(0, a) : f,
          h = g.length,
          y = function (t, n) {
            var e;
            return d === o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION
              ? s.jsx(
                  r(
                    "WAWebMediaEditorFilmstripAdCreationAttachMediaThumb.react",
                  ),
                  {
                    attachMedia: t,
                    isActive: t === i.getActive(),
                    onDeleteClick: u,
                    onSelectClick: l,
                    ref: (function (e) {
                      function t(t) {
                        return e.apply(this, arguments);
                      }
                      return (
                        (t.toString = function () {
                          return e.toString();
                        }),
                        t
                      );
                    })(function (e) {
                      return c(t.id, e);
                    }),
                  },
                )
              : s.jsx(r("WAWebMediaEditorFilmstripAttachMediaThumb.react"), {
                  attachMedia: t,
                  active: t === i.getActive(),
                  index: n + 1,
                  totalCount: h,
                  previewMode:
                    ((e = i.getActive()) == null ? void 0 : e.type) !==
                    o("WAWebMsgType").MSG_TYPE.IMAGE,
                  onClick: l,
                  onClose: u,
                  ref: function (n) {
                    return c(t.id, n);
                  },
                });
          },
          C;
        (t[8] !== y || t[9] !== p
          ? ((C = function (t, n) {
              var e = y(t, n);
              return p
                ? s.jsx("div", { children: e }, t.id)
                : s.jsx(
                    r("CometDraggableListItemKeyboardHandler.react"),
                    { children: e },
                    t.id,
                  );
            }),
            (t[8] = y),
            (t[9] = p),
            (t[10] = C))
          : (C = t[10]),
          (_ = g.map(C)),
          (t[0] = p),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = u),
          (t[5] = c),
          (t[6] = d),
          (t[7] = _));
      } else _ = t[7];
      var b = _,
        v;
      t[11] !== i || t[12] !== b
        ? ((v = function (t, n, r) {
            (i.reorder(n, r), o("WAArrayMove").arrayMoveMutate(b, n, r));
          }),
          (t[11] = i),
          (t[12] = b),
          (t[13] = v))
        : (v = t[13]);
      var S = v,
        R;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = {}), (t[14] = R))
        : (R = t[14]);
      var L;
      t[15] !== S || t[16] !== b
        ? ((L = s.jsx(r("CometDraggableList.react"), {
            direction: "horizontal",
            items: b,
            onReorder: S,
            placeholderXstyle: R,
          })),
          (t[15] = S),
          (t[16] = b),
          (t[17] = L))
        : (L = t[17]);
      var E;
      return (
        t[18] !== n || t[19] !== L
          ? ((E = s.jsx("div", { className: n, role: "tablist", children: L })),
            (t[18] = n),
            (t[19] = L),
            (t[20] = E))
          : (E = t[20]),
        E
      );
    }
    l.default = c;
  },
  98,
);

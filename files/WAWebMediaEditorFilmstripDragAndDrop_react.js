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
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = e.className,
        n = e.maxFiles,
        a = e.mediaCollection,
        i = e.onClick,
        l = e.onClose,
        c = e.onElementRef,
        d = e.theme,
        m = r("useWAWebIsKeyboardUser")(),
        p = m.isKeyboardUser,
        _ = u(
          function () {
            var e = a.getPreviewableMedias(),
              t = n != null && n > 0 ? e.slice(0, n) : e,
              u = t.length,
              m = function (t, n) {
                var e;
                return d ===
                  o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION
                  ? s.jsx(
                      r(
                        "WAWebMediaEditorFilmstripAdCreationAttachMediaThumb.react",
                      ),
                      {
                        attachMedia: t,
                        isActive: t === a.getActive(),
                        onDeleteClick: l,
                        onSelectClick: i,
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
                  : s.jsx(
                      r("WAWebMediaEditorFilmstripAttachMediaThumb.react"),
                      {
                        attachMedia: t,
                        active: t === a.getActive(),
                        index: n + 1,
                        totalCount: u,
                        previewMode:
                          ((e = a.getActive()) == null ? void 0 : e.type) !==
                          o("WAWebMsgType").MSG_TYPE.IMAGE,
                        onClick: i,
                        onClose: l,
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
                    );
              };
            return t.map(function (e, t) {
              var n = m(e, t);
              return p
                ? s.jsx("div", { children: n }, e.id)
                : s.jsx(
                    r("CometDraggableListItemKeyboardHandler.react"),
                    { children: n },
                    e.id,
                  );
            });
          },
          [a, i, l, c, n, d, p],
        ),
        f = function (t, n, r) {
          (a.reorder(n, r), o("WAArrayMove").arrayMoveMutate(_, n, r));
        };
      return s.jsx("div", {
        className: t,
        role: "tablist",
        children: s.jsx(r("CometDraggableList.react"), {
          direction: "horizontal",
          items: _,
          onReorder: f,
          placeholderXstyle: {},
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

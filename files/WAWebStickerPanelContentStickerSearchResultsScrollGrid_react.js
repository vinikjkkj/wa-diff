__d(
  "WAWebStickerPanelContentStickerSearchResultsScrollGrid.react",
  [
    "fbt",
    "WAWebEmojiPickerConstants",
    "WAWebStickerPanelContentEmpty.react",
    "WAWebStickerPanelContentStickersScrollGridPresentational.react",
    "WAWebStickerSearchCollection",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useImperativeHandle,
      _ = d.useRef,
      f = d.useState,
      g = 250;
    function h(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.selectedTab,
        l = f(function () {
          return o(
            "WAWebStickerSearchCollection",
          ).StickerSearchCollection.toArray();
        }),
        u = l[0],
        d = l[1],
        h = function () {
          (d(
            o("WAWebStickerSearchCollection").StickerSearchCollection.toArray(),
          ),
            a.resetScroll());
        },
        y = r("useWAWebDebouncedCallback")(h, g);
      (o("useWAWebListener").useListener(
        o("WAWebStickerSearchCollection").StickerSearchCollection,
        "add remove reset",
        y,
      ),
        m(
          function () {
            if (i) {
              var e = o("WAWebEmojiPickerConstants").convertTabToMood(i);
              (e != null &&
                o(
                  "WAWebStickerSearchCollection",
                ).StickerSearchCollection.searchMood(e),
                o(
                  "WAWebStickerSearchCollection",
                ).StickerSearchCollection.hasFetchedData() && y());
            }
          },
          [i],
        ));
      var C = _();
      return (
        p(n, function () {
          return {
            focus: function (t) {
              var e = C.current;
              e && e.focus(t);
            },
          };
        }),
        a.searchText &&
        o(
          "WAWebStickerSearchCollection",
        ).StickerSearchCollection.isFetchingData() === !1 &&
        o("WAWebStickerSearchCollection").StickerSearchCollection.length === 0
          ? c.jsx(r("WAWebStickerPanelContentEmpty.react"), {
              text: s._(/*BTDS*/ "No results"),
            })
          : c.jsx(
              o(
                "WAWebStickerPanelContentStickersScrollGridPresentational.react",
              ).StickersScrollGridPresentational,
              {
                ref: C,
                onFocusPrev: a.onFocusPrev,
                onScroll: a.onScroll,
                resetScroll: a.resetScroll,
                onStickerClick: a.onStickerClick,
                onStickerEnter: a.onStickerClick,
                stickers: u,
                theme: "searchable",
                displayLocation: a.displayLocation,
                loadOneRow: !0,
              },
            )
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);

__d(
  "WAWebDBSearchByDate",
  [
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    async function s(t, n, r, a, i) {
      var l = o("WAWebDBMessageUtils").craftMessageRangeIndex(t, a, !1, n),
        s = o("WAWebDBMessageUtils").craftMessageRangeIndex(t, a, !1, r),
        u = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["messageRangeIndex"],
            l,
            s,
            { lowerInclusive: !0, upperInclusive: !0, reverse: i, limit: e },
            function (e) {
              return (
                !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                  o("WAWebViewMode.flow").ViewModeSurface.SEARCH,
                  e.viewMode,
                ) || !o("WAWebDBMessageStoreUtils").shouldRenderInUI(e, void 0)
              );
            },
          );
      return u[0];
    }
    l.getClosestMessageBetweenDates = s;
  },
  98,
);

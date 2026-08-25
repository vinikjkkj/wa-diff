__d(
  "WAWebDBSearchByDate",
  [
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageStoreUtils",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chatId,
            r = t.endTimestampSeconds,
            a = t.incoming,
            i = t.searchingBefore,
            l = t.startTimestampSeconds,
            s = o("WAWebDBMessageRangeIndex").craftMessageRangeIndex(
              n,
              a,
              !1,
              l,
            ),
            u = o("WAWebDBMessageRangeIndex").craftMessageRangeIndex(
              n,
              a,
              !1,
              r,
            ),
            c = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["messageRangeIndex"],
                s,
                u,
                {
                  lowerInclusive: !0,
                  upperInclusive: !0,
                  reverse: i,
                  limit: e,
                },
                function (e) {
                  return (
                    !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                      o("WAWebViewMode.flow").ViewModeSurface.SEARCH,
                      e.viewMode,
                    ) ||
                    !o("WAWebDBMessageStoreUtils").shouldRenderInUI(e, void 0)
                  );
                },
              );
          return c[0];
        })),
        u.apply(this, arguments)
      );
    }
    l.getClosestMessageBetweenDates = s;
  },
  98,
);

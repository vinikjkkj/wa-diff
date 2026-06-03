__d(
  "WAWebDBSearchByDate",
  [
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    function s(e, t, n, r, o) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            var l = o("WAWebDBMessageUtils").craftMessageRangeIndex(
                t,
                a,
                !1,
                n,
              ),
              s = o("WAWebDBMessageUtils").craftMessageRangeIndex(t, a, !1, r),
              u = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .between(
                  ["messageRangeIndex"],
                  l,
                  s,
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
            return u[0];
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.getClosestMessageBetweenDates = s;
  },
  98,
);

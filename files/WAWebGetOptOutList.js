__d(
  "WAWebGetOptOutList",
  [
    "WASmaxBlocklistsGetOptOutListRPC",
    "WAWebGetNumbersForBrandIdsJob",
    "WAWebJidToWid",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebUserPrefsMultiDevice").getOptOutListHash(),
            n = {
              itemArgs: t != null ? { itemDhash: t } : void 0,
              iqCategory: e,
            },
            r = yield o(
              "WASmaxBlocklistsGetOptOutListRPC",
            ).sendGetOptOutListRPC(n);
          switch (r.name) {
            case "GetOptOutListResponseSuccessWithMatch": {
              var a = { wids: [] };
              return a;
            }
            case "GetOptOutListResponseSuccessWithMismatch": {
              var i = { wids: [] },
                l = r.value.listDhash,
                s = r.value.listItem;
              l != null && (i.dhash = l);
              var u = [],
                c = {};
              if (
                (s.forEach(function (e) {
                  if (e.bizOptOutIds.name === "BizOptOutJid") {
                    var t = o("WAWebJidToWid").userJidToUserWid(
                      e.bizOptOutIds.value.bizOptOutJid,
                    );
                    i.wids.push({ wid: t, category: e.category });
                  } else if (e.bizOptOutIds.name === "BizOptOutBrandID") {
                    var n = e.bizOptOutIds.value.bizOptOutBrandId;
                    (u.push(n), (c[n] = e.category));
                  }
                }),
                u.length > 0)
              ) {
                var d = yield o(
                  "WAWebGetNumbersForBrandIdsJob",
                ).getNumbersForBrandIdsJob(u);
                d.type === "success" &&
                  d.value.forEach(function (e) {
                    var t = e.brandId,
                      n = e.lids,
                      r = e.phoneNumbers;
                    (o(
                      "WAWebMarketingMessagesUserFeedbackGatingUtils",
                    ).isMMOptOutAlwaysUseLidInGraphQLEnabled() &&
                      (n == null ||
                        n.forEach(function (e) {
                          i.wids.push({ wid: e, category: c[t] });
                        })),
                      r.forEach(function (e) {
                        var n = o("WAWebWidFactory").createUserWidOrThrow(e);
                        i.wids.push({ wid: n, category: c[t] });
                      }));
                  });
              }
              return i;
            }
            case "GetOptOutListResponseInvalidRequest": {
              var m = r.value.errorGetBlocklistErrors.value,
                p = m.code,
                _ = m.text;
              return { errorCode: Number(p), errorText: _ };
            }
            case "GetOptOutListResponseInternalServerError": {
              var f = r.value.errorServerErrors.value,
                g = f.code,
                h = f.text;
              return { errorCode: Number(g), errorText: h };
            }
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.getOptOutList = e;
  },
  98,
);

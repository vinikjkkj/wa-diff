__d(
  "WAWebOptOutBizAction",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebGetNumbersForBrandIdsJob",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebOptOutBizToast",
    "WAWebOptOutListCollection",
    "WAWebOptOutUserJob",
    "WAWebStateUtils",
    "WAWebUpdateOptOutListDbJob",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "WAWebWorkerSafeBackendApi",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, r) {
      return c(o("WAWebStateUtils").unproxy(e), !0, t, n, r);
    }
    function u(e) {
      var t = e.contact,
        n = e.itemCategory,
        r = e.itemEntryPoint,
        a = e.toastId;
      return c(o("WAWebStateUtils").unproxy(t), !1, n, r, a);
    }
    function c(t, n, r, a, i) {
      var l = t.isContactOptedOut,
        s = n && l,
        u = !n && !l;
      if (s || u) return Promise.resolve();
      var c = t.id,
        m,
        _ = c;
      if (
        o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMOptOutAlwaysUseLidInGraphQLEnabled()
      ) {
        var f = o("WAWebWidToJid").widToUserJid(_);
        m = f;
        try {
          var g = o("WAWebJidToWid").userJidToUserWid(f),
            h = o("WAWebLidMigrationUtils").toUserLidOrThrow(g);
          m = o("WAWebWidToJid").widToUserJid(h);
        } catch (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[OptOutBizAction] Failed to convert JID to LID",
              ])),
          );
        }
      } else {
        var y = n && c.isLid(),
          C = t.phoneNumber;
        ((_ = y && C != null ? C : c),
          (m = o("WAWebWidToJid").widToUserJid(_)));
      }
      var b = n
          ? o("WAWebOptOutUserJob").optOutUser({
              itemCategory: r,
              itemEntryPoint: a,
              jid: m,
            })
          : o("WAWebOptOutUserJob").optInUser({
              itemCategory: r,
              itemEntryPoint: a,
              jid: m,
            }),
        v = b.then(async function (e) {
          if (e && e.errorCode != null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              e.errorCode,
              e.errorText,
            );
          if (
            (await o("WAWebUserPrefsMultiDevice").setOptOutlistHash(
              e.listDhash,
            ),
            e.listMatched === "true")
          ) {
            var t = e.listItem;
            if ((t == null ? void 0 : t.bizOptOutIds.name) === "BizOptOutJid") {
              var n = t.bizOptOutIds.value.bizOptOutJid,
                r = t.action;
              await p(o("WAWebJidToWid").userJidToUserWid(n), r === "block");
            } else if (
              (t == null ? void 0 : t.bizOptOutIds.name) === "BizOptOutBrandID"
            ) {
              var a = t.bizOptOutIds.value.bizOptOutBrandId,
                i = t.action;
              await d([a], i === "block");
            }
          } else {
            (await o("WAWebUpdateOptOutListDbJob").clearOptOutListDbJob(),
              o("WAWebOptOutListCollection").OptOutListCollection.forEach(
                async function (e) {
                  o("WAWebOptOutListCollection").OptOutListCollection.remove(e);
                },
              ));
            var l = [];
            (e.listItem &&
              Array.isArray(e.listItem) &&
              e.listItem.forEach(async function (e) {
                if (e.bizOptOutIds.name === "BizOptOutJid") {
                  var t = e.bizOptOutIds.value.bizOptOutJid,
                    n = e.action;
                  n === "block" &&
                    (await p(o("WAWebJidToWid").userJidToUserWid(t), !0));
                } else if (e.bizOptOutIds.name === "BizOptOutBrandID") {
                  var r = e.action;
                  r === "block" &&
                    l.push(e.bizOptOutIds.value.bizOptOutBrandId);
                }
              }),
              await d(l, !0));
          }
        });
      return (
        o("WAWebOptOutBizToast").optOutBizToast({
          action: v,
          block: n,
          contact: t,
          itemCategory: r,
          itemEntryPoint: a,
          toastId: i,
        }),
        v
      );
    }
    async function d(e, t) {
      if (e.length !== 0) {
        var n = await m(e);
        await Promise.allSettled(
          n.map(function (e) {
            return p(e, t);
          }),
        );
      }
    }
    async function m(e) {
      var t = await o("WAWebGetNumbersForBrandIdsJob").getNumbersForBrandIdsJob(
        e,
      );
      return t.type !== "success"
        ? []
        : o(
              "WAWebMarketingMessagesUserFeedbackGatingUtils",
            ).isMMOptOutAlwaysUseLidInGraphQLEnabled()
          ? r("filterNulls")(
              t.value.flatMap(function (e) {
                return e.lids;
              }),
            )
          : t.value
              .flatMap(function (e) {
                return e.phoneNumbers;
              })
              .map(function (e) {
                return o("WAWebWidFactory").createUserWidOrThrow(e);
              });
    }
    async function p(e, t) {
      await o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
        "updateOptOutListModelInCollection",
        { targetWid: e, isBlocked: t },
      );
    }
    ((l.optOutContact = s), (l.optInContact = u));
  },
  98,
);

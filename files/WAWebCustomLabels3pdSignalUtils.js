__d(
  "WAWebCustomLabels3pdSignalUtils",
  [
    "WALogger",
    "WAWebBizGatingUtils",
    "WAWebChatModel",
    "WAWebCommonCTWADataSharing",
    "WAWebCustomLabel3pdEventQuery",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebSessionStorage",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebSmbMarkAsXLabelAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "wa_custom_label_";
    function c(e) {
      if (r("WAWebSessionStorage") == null) return null;
      try {
        var t = u + e,
          n = r("WAWebSessionStorage").getItem(t);
        if (n != null && n !== "") return JSON.parse(n);
      } catch (e) {}
      return null;
    }
    function d(e, t) {
      if (r("WAWebSessionStorage"))
        try {
          var n = u + e;
          r("WAWebSessionStorage").setItem(n, JSON.stringify(t));
        } catch (e) {}
    }
    function m(e) {
      switch (e) {
        case "order_created":
        case "order_updated":
        case "lead_created":
          return e;
        default:
          return null;
      }
    }
    function p(e) {
      switch (e) {
        case "processing":
        case "shipped":
        case "completed":
        case "canceled":
        case "new_order":
        case "order_complete":
        case "paid":
        case "pending_payment":
        case "paid_change":
        case "new_customer":
        case "follow_up":
        case "lead":
        case "important":
          return e;
        default:
          return null;
      }
    }
    function _(t, n, a) {
      if (
        !(
          !o("WAWebBizGatingUtils").isCTWACustomLabelsSignalsEnabled() ||
          !o("WAWebBizGatingUtils").isCTWAWebCustomLabelsSignalsEnabled()
        )
      ) {
        var i = n.filter(function (e) {
          return (
            e instanceof o("WAWebChatModel").Chat &&
            r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e) !=
              null
          );
        });
        if (i.length !== 0) {
          var l = [];
          if (
            (t.forEach(function (e) {
              var t = o("WAWebLabelCollection").LabelCollection.get(e);
              if (t) {
                var n = o("WAWebLabelConstants").mapLabelNameToPredefinedId(
                  t.name,
                );
                !n &&
                  t.predefinedId == null &&
                  l.push({ custom_label: t.name });
              }
            }),
            l.length !== 0)
          ) {
            var u = [],
              _ = [];
            l.forEach(function (e) {
              var t = c(e.custom_label);
              t != null ? u.push(t) : _.push(e);
            });
            var f = o("WAWebBizGatingUtils").getCTWACustomLabelAlgorithmGroup();
            o("WAWebCustomLabel3pdEventQuery")
              .getCustomLabel3pdEvent(_, f)
              .then(function (t) {
                if (t.type === "success") {
                  var n = t.events.map(function (e) {
                      var t,
                        n = {
                          custom_label: e.custom_label,
                          ctwa_3pd_conversion_type:
                            e.ctwa_3pd_conversion_type != null
                              ? m(e.ctwa_3pd_conversion_type.toLowerCase())
                              : null,
                          ctwa_3pd_conversion_subtype:
                            e.ctwa_3pd_conversion_subtype != null
                              ? p(e.ctwa_3pd_conversion_subtype.toLowerCase())
                              : null,
                          ctwa_3pd_conversion_metadata:
                            (t = e.ctwa_3pd_conversion_metadata) != null
                              ? t
                              : "{}",
                        };
                      return (
                        e.ctwa_3pd_conversion_type != null &&
                          d(e.custom_label, n),
                        n
                      );
                    }),
                    r = [].concat(n, u);
                  r.length > 0 &&
                    (o(
                      "WAWebSmb3pdConversionSignalAction",
                    ).log3pdConversionSignalForChats(i, [], a, r),
                    i.forEach(function (e) {
                      e instanceof o("WAWebChatModel").Chat &&
                        o(
                          "WAWebSmbMarkAsXLabelAction",
                        ).logLabelAddedToChatAction(e, [], a, r);
                    }));
                } else
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getCustomLabel3pdEvent: unsuccessful response: ",
                        "",
                      ])),
                    t.type,
                  );
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "getCustomLabel3pdEvent: failed to call GraphQL endpoint",
                      ])),
                  )
                  .catching(e);
              });
          }
        }
      }
    }
    l.processCustomLabels3pdSignals = _;
  },
  98,
);

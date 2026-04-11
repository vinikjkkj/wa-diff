__d(
  "WAWebNewsletterEnforcementAlertModel",
  ["WAWebBaseModel", "WAWebNewsletterEnforcementAppealModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.chatId = o("WAWebBaseModel").prop()),
          (t.enforcementCreationTime = o("WAWebBaseModel").prop()),
          (t.enforcementViolationCategory = o("WAWebBaseModel").prop()),
          (t.enforcementType = o("WAWebBaseModel").prop()),
          (t.enforcementId = o("WAWebBaseModel").prop()),
          (t.enforcementExtraData = o("WAWebBaseModel").prop()),
          (t.enforcementPolicyInformation = o("WAWebBaseModel").prop()),
          (t.enforcementSource = o("WAWebBaseModel").prop()),
          (t.countryCodes = o("WAWebBaseModel").prop()),
          (t.targetMsgMapForEvidence = o("WAWebBaseModel").prop()),
          (t.lastUpdated = o("WAWebBaseModel").prop()),
          (t.appeal = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.set = function (n, r, a) {
          if (typeof n == "string" && n === "appeal" && r != null) {
            if (
              !(
                r instanceof
                o("WAWebNewsletterEnforcementAppealModel")
                  .NewsletterEnforcementAppeal
              )
            ) {
              var t = new (o(
                "WAWebNewsletterEnforcementAppealModel",
              ).NewsletterEnforcementAppeal)(r);
              return e.prototype.set.call(this, n, t, a);
            }
            return e.prototype.set.call(this, n, r, a);
          }
          if (
            typeof n == "string" &&
            n === "targetMsgMapForEvidence" &&
            r != null
          ) {
            if (r instanceof Map) {
              var i = new Map();
              for (var l of r.entries()) {
                var s = l[0],
                  u = l[1];
                u != null &&
                !(
                  u instanceof
                  o("WAWebNewsletterEnforcementAppealModel")
                    .NewsletterEnforcementAppeal
                )
                  ? i.set(
                      s,
                      new (o(
                        "WAWebNewsletterEnforcementAppealModel",
                      ).NewsletterEnforcementAppeal)(u),
                    )
                  : i.set(s, u);
              }
              return e.prototype.set.call(this, n, i, a);
            }
            return e.prototype.set.call(this, n, r, a);
          }
          if (typeof n == "object" && n != null) {
            var c = babelHelpers.extends({}, n),
              d = !1;
            c.appeal != null &&
              !(
                c.appeal instanceof
                o("WAWebNewsletterEnforcementAppealModel")
                  .NewsletterEnforcementAppeal
              ) &&
              ((c.appeal = new (o(
                "WAWebNewsletterEnforcementAppealModel",
              ).NewsletterEnforcementAppeal)(c.appeal)),
              (d = !0));
            var m = c.targetMsgMapForEvidence;
            if (m != null && m instanceof Map) {
              var p = new Map();
              for (var _ of m.entries()) {
                var f = _[0],
                  g = _[1];
                g != null &&
                !(
                  g instanceof
                  o("WAWebNewsletterEnforcementAppealModel")
                    .NewsletterEnforcementAppeal
                )
                  ? (p.set(
                      f,
                      new (o(
                        "WAWebNewsletterEnforcementAppealModel",
                      ).NewsletterEnforcementAppeal)(g),
                    ),
                    (d = !0))
                  : p.set(f, g);
              }
              c.targetMsgMapForEvidence = p;
            }
            if (d) return e.prototype.set.call(this, c, r, a);
          }
          return e.prototype.set.call(this, n, r, a);
        }),
        (n.isValidAlertToRender = function () {
          var e, t, n, r;
          return (
            (((e = this.appeal) == null ? void 0 : e.appealState) !==
              "SUCCESS" &&
              ((t = this.appeal) == null ? void 0 : t.appealState) !==
                "CONTENT_UNAVAILABLE") ||
            Array.from(
              (n =
                (r = this.targetMsgMapForEvidence) == null
                  ? void 0
                  : r.values()) != null
                ? n
                : [],
            ).some(function (e) {
              return (
                e.appealState !== "SUCCESS" &&
                e.appealState !== "CONTENT_UNAVAILABLE"
              );
            }) ||
            !1
          );
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "newsletter_enforcement_alert";
    var s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterEnforcementAlert = s;
  },
  98,
);

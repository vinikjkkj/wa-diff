__d(
  "WAWebNewsletterEnforcementAlertCollection",
  [
    "WAWebBaseCollection",
    "WAWebNewsletterEnforcementAlertModel",
    "WAWebNewsletterEnforcementAppealModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
        return n.enforcementCreationTime - t.enforcementCreationTime;
      },
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.setMsgModelMap = function (n) {
            t.msgModelMap = n;
          }),
          (n.getAppeals = function () {
            var e = [];
            return (
              this.map(function (t) {
                var n;
                if (
                  ((n = t.targetMsgMapForEvidence) == null
                    ? void 0
                    : n.values().toArray().length) !== 0 &&
                  t.targetMsgMapForEvidence != null
                )
                  for (var r of t.targetMsgMapForEvidence.values())
                    r != null &&
                      r.appealState !== "NOT_APPEALED" &&
                      r.appealState !== "NON_APPEALABLE" &&
                      e.push(
                        new (o(
                          "WAWebNewsletterEnforcementAppealModel",
                        ).NewsletterEnforcementAppeal)(r),
                      );
                else
                  t.appeal != null &&
                    t.appeal.appealState !== "NOT_APPEALED" &&
                    t.appeal.appealState !== "NON_APPEALABLE" &&
                    e.push(
                      new (o(
                        "WAWebNewsletterEnforcementAppealModel",
                      ).NewsletterEnforcementAppeal)(t.appeal),
                    );
              }),
              e.sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.appealCreationTime) != null ? n : 0) -
                  ((r = e.appealCreationTime) != null ? r : 0)
                );
              })
            );
          }),
          t
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((s.model = o(
      "WAWebNewsletterEnforcementAlertModel",
    ).NewsletterEnforcementAlert),
      (s.comparator = e));
    var u = new s();
    l.NewsletterEnforcementAlertCollection = u;
  },
  98,
);

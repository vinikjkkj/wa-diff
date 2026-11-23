__d(
  "WAWebUserDisclosureCollection",
  [
    "WAWebBaseCollection",
    "WAWebGetUserDisclosuresContentsAction",
    "WAWebUserDisclosureModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 864e5,
      s = (function (t) {
        function n() {
          for (var n, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (n = t.call.apply(t, [this].concat(a)) || this),
            (n.findImpl = async function (t) {
              var r,
                a = n.get(t);
              if (
                a != null &&
                a.privacyDisclosureModal != null &&
                a.endDate != null &&
                ((r = a.endDate) == null ? void 0 : r.getTime()) > Date.now() &&
                Date.now() - a.lastUpdated.getTime() < e
              )
                return a;
              var i = await o(
                "WAWebGetUserDisclosuresContentsAction",
              ).getDisclosuresContentAction(parseInt(t, 10));
              if (i != null)
                return n.gadd(
                  {
                    id: t,
                    policyVersion: i.policyVersion,
                    privacyDisclosureModal: i.privacyDisclosureModal,
                    endDate: i.endDate,
                    lastUpdated: new Date(),
                  },
                  { merge: !0 },
                );
            }),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.find = async function (n, r) {
            var e,
              o = this.get(n);
            if (o == null || o.privacyDisclosureModal != null)
              return t.prototype.find.call(this, n, r);
            var a = await this.update(n, r);
            return (e = Array.isArray(a) ? a[0] : a) != null ? e : o;
          }),
          (a.updateNoticeStage = async function (t) {
            var e = t.accepted,
              n = t.id,
              o = t.policyVersion,
              a = t.stage,
              i = new (r("WAWebUserDisclosureModel"))({
                id: n,
                policyVersion: o,
                accepted: e,
                stage: a,
                lastUpdated: new Date(),
              });
            this.gadd(i, { merge: !0 });
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebUserDisclosureModel");
    var u = new s();
    l.UserDisclosureCollection = u;
  },
  98,
);

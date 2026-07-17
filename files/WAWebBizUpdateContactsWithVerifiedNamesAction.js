__d(
  "WAWebBizUpdateContactsWithVerifiedNamesAction",
  [
    "WAWebApiVerifiedBusinessName",
    "WAWebBusinessProfileTypes",
    "WAWebContactCollection",
    "WAWebHandleMsgTypes.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = {};
      for (var r of e) {
        var a = r.id;
        n[a.user] = r;
      }
      for (var i of t) {
        var l = i.id;
        if (!l.isBot()) {
          var s = n[l.user],
            u = !!s,
            c = s || {},
            d = c.isApi,
            m = c.isSmb,
            p = c.level,
            _ = c.name,
            f = c.privacyMode,
            g = !!d,
            h = {
              isBusiness: u,
              isEnterprise: g,
              isSmb: !!m,
              verifiedLevel: o("WAWebBusinessProfileTypes").convertLevel(p),
              verifiedName: _,
              privacyMode: f,
            };
          i.set(h);
        }
      }
    }
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = (yield o(
            "WAWebApiVerifiedBusinessName",
          ).getAllVerifiedNames()).map(function (e) {
            var t = e.id,
              n = e.isApi,
              a = e.isSmb,
              i = e.level,
              l = e.name,
              s = e.privacyMode;
            return {
              id: o("WAWebWidFactory").createUserWidOrThrow(t),
              name: l,
              level: i,
              isApi: n,
              isSmb: a,
              privacyMode: s
                ? {
                    actualActors: r("nullthrows")(
                      o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(
                        s.actualActors,
                      ),
                    ),
                    hostStorage: r("nullthrows")(
                      o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(
                        s.hostStorage,
                      ),
                    ),
                    privacyModeTs: s.privacyModeTs,
                  }
                : null,
            };
          });
          e(t, o("WAWebContactCollection").ContactCollection.toArray());
        })),
        u.apply(this, arguments)
      );
    }
    ((l.updateContactsWithVerifiedNames = e),
      (l.applyContactBusinessProps = s));
  },
  98,
);

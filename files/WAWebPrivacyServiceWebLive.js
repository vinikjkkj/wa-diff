__d(
  "WAWebPrivacyServiceWebLive",
  ["JSResourceForInteraction", "Promise", "WAWebPrivacyService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = r("JSResourceForInteraction"))("WAWebAccountSyncJob").__setRef(
        "WAWebPrivacyServiceWebLive",
      ),
      c = s("WAWebApiPrivacyDisallowedList").__setRef(
        "WAWebPrivacyServiceWebLive",
      ),
      d = s("WAWebQueryPrivacyDisallowedListUtil").__setRef(
        "WAWebPrivacyServiceWebLive",
      ),
      m = s("WAWebSetPrivacyJob").__setRef("WAWebPrivacyServiceWebLive"),
      p = s("WAWebPhoneNumberSharingSettingsUI").__setRef(
        "WAWebPrivacyServiceWebLive",
      ),
      _ = s("WAWebUpdatePhoneNumberSharingSetting").__setRef(
        "WAWebPrivacyServiceWebLive",
      ),
      f = s("WAWebUpdatePhoneNumberSharingList").__setRef(
        "WAWebPrivacyServiceWebLive",
      ),
      g = o("WAWebPrivacyService").PrivacyService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([
              u.load(),
              c.load(),
              d.load(),
              m.load(),
              p.load(),
              _.load(),
              f.load(),
            ]);
          }),
          r = t[0].updatePrivacySettings,
          a = t[1].queryDisallowedLists,
          i = t[2].queryPrivacyDisallowedList,
          l = t[3].setPrivacy,
          s = t[4],
          g = s.isPhoneNumberSharingSettingsAvailable,
          h = s.loadPhoneNumberSharingSettings,
          y = s.readPhoneNumberSharingList,
          C = s.readPhoneNumberSharingSettingsSnapshot,
          b = t[5].updatePhoneNumberSharingSetting,
          v = t[6].updatePhoneNumberSharingList,
          S = {
            isPhoneNumberSharingSettingsAvailable: function () {
              return o("WebDi.Async").fromPromise(function () {
                return g();
              });
            },
            loadPhoneNumberSharingSettings: function () {
              return o("WebDi.Async").fromPromise(function () {
                return h();
              });
            },
            readPhoneNumberSharingSettingsSnapshot: function () {
              return o("WebDi.Async").fromPromise(function () {
                return C();
              });
            },
            updatePhoneNumberSharingSetting: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return b(t);
              });
            },
            readPhoneNumberSharingList: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return y(t);
              });
            },
            updatePhoneNumberSharingList: function (t, n, r) {
              return o("WebDi.Async").fromPromise(function () {
                return v(t, n, r);
              });
            },
            queryDisallowedLists: function () {
              return o("WebDi.Async").fromPromise(function () {
                return a();
              });
            },
            updatePrivacySettings: function () {
              return o("WebDi.Async").fromPromise(function () {
                return r();
              });
            },
            queryPrivacyDisallowedList: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t);
              });
            },
            setPrivacy: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return l(t);
              });
            },
          };
        return S;
      });
    l.PrivacyServiceWebLive = g;
  },
  98,
);

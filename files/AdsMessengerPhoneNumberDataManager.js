__d(
  "AdsMessengerPhoneNumberDataManager",
  [
    "AdsMessengerJSONPaths",
    "AdsMessengerPhoneNumberSwitchToggleAction",
    "AdsMessengerPhoneNumberUpdateAction",
    "LoadObject",
    "PhoneNumber",
    "PhoneNumberError",
    "PhoneNumberView",
    "getByPath",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "(?<=([^0-9p{Sc}]))([0-9\\.() \\-]+)([0-9])(?![0-9@])",
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.validatePhoneNumber = function (t, n, o) {
            n === void 0 && (n = !0);
            var e = new (r("PhoneNumberView"))().changeFragment(t);
            r("promiseDone")(e.promiseWithNumber(), function (e) {
              var a,
                l = r("LoadObject").withValue(e, { creatorModuleID: i.id }),
                s = e.xuiError == null,
                u = (a = e.phoneNumber) == null ? void 0 : a.getURI();
              (o(
                s && u != null
                  ? r("PhoneNumber").getRawNumberFromTelURI(u)
                  : null,
              ),
                !(!s && !n) &&
                  r("AdsMessengerPhoneNumberUpdateAction").dispatch(
                    {
                      rawPhoneNumber: t,
                      phoneNumberView: s
                        ? l
                        : l.setError(new (r("PhoneNumberError"))(e.xuiError)),
                    },
                    {
                      line: "50",
                      module: "AdsMessengerPhoneNumberDataManager.js",
                      moduleID: i.id,
                    },
                  ));
            });
          }),
          (n.parsePhoneNumberFromJSON = function (t) {
            if (t != null)
              try {
                var e = r("getByPath")(
                  JSON.parse(t),
                  r("AdsMessengerJSONPaths").PHONE_NUMBER,
                );
                if (e == null) {
                  this.clearPhoneNumber();
                  return;
                }
                var n = function (t) {
                  r("AdsMessengerPhoneNumberSwitchToggleAction").dispatch(
                    { isPhoneNumberEnabled: t != null },
                    {
                      line: "77",
                      module: "AdsMessengerPhoneNumberDataManager.js",
                      moduleID: i.id,
                    },
                  );
                };
                this.validatePhoneNumber(e, !0, n);
              } catch (e) {
                this.clearPhoneNumber();
              }
          }),
          (n.clearPhoneNumber = function () {
            r("AdsMessengerPhoneNumberUpdateAction").dispatch(
              {
                rawPhoneNumber: null,
                phoneNumberView: r("LoadObject").withValue(
                  new (r("PhoneNumberView"))(),
                  { creatorModuleID: i.id },
                ),
                isPhoneNumberEnabled: !1,
              },
              {
                line: "94",
                module: "AdsMessengerPhoneNumberDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (n.getPhoneNumberFromAdText = function (n) {
            if (n == null) return null;
            var t = n.match(e);
            return t == null || t.length === 0 ? null : t[0];
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);

__d(
  "WAWebUsyncDevice",
  ["WAWap"],
  function (t, n, r, o, a, i, l) {
    var e = 2;
    function s(e) {
      var t;
      e.assertTag("devices");
      var n = e.maybeChild("error");
      if (n)
        return {
          errorCode: n.attrInt("code"),
          errorText: n.attrString("text"),
        };
      var r = e.maybeChild("key-index-list"),
        o = e.maybeChild("device-list"),
        a =
          r == null
            ? null
            : {
                ts: r.attrTime("ts"),
                signedKeyIndexBytes: r.hasContent() ? r.contentBytes() : null,
                expectedTs:
                  (t = r.maybeAttrTime("expected_ts")) != null ? t : void 0,
              },
        i =
          o == null
            ? void 0
            : o.mapChildrenWithTag("device", function (e) {
                var t = {
                  id: e.attrInt("id"),
                  keyIndex: e.maybeAttrInt("key-index"),
                };
                return (
                  e.hasAttr("is_hosted") &&
                    e.attrString("is_hosted") === "true" &&
                    (t.isHosted = !0),
                  t
                );
              });
      return { deviceList: i, keyIndex: a };
    }
    var u = (function () {
      function t() {}
      var n = t.prototype;
      return (
        (n.getName = function () {
          return "devices";
        }),
        (n.getQueryElement = function () {
          return o("WAWap").wap("devices", {
            version: o("WAWap").CUSTOM_STRING(String(e)),
          });
        }),
        (n.getUserElement = function (t) {
          var e = t.getDeviceHash(),
            n = t.getTs(),
            r = t.getExpectedTs();
          return e == null && n == null && r == null
            ? null
            : o("WAWap").wap("devices", {
                device_hash:
                  e != null
                    ? o("WAWap").CUSTOM_STRING(e)
                    : o("WAWap").DROP_ATTR,
                ts: n != null ? o("WAWap").INT(n) : o("WAWap").DROP_ATTR,
                expected_ts:
                  r != null ? o("WAWap").INT(r) : o("WAWap").DROP_ATTR,
              });
        }),
        t
      );
    })();
    ((l.deviceParser = s), (l.USyncDeviceProtocol = u));
  },
  98,
);

__d(
  "WAWebHatchSpaceActions",
  [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchSpacesManager",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t ? "pin" : "unpin",
            r = yield o("WAWebHatchVmConnection")
              .connectHatchVmApi()
              .catch(function () {
                return null;
              });
          if (r == null) return f(n, "no_session");
          var a = yield r.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.ARTIFACTS_PIN,
            {
              body: new TextEncoder().encode(
                JSON.stringify({ artifact_ref: "space:" + e, pinned: t }),
              ),
            },
          );
          return a.kind !== "Ok"
            ? f(n, _(a))
            : o("WAWebHatchJsonReaders").readBool(
                  o("WAWebHatchJsonReaders").readObject(a.value, "artifact"),
                  "is_pinned",
                ) !== t
              ? f(n, "not_confirmed")
              : !0;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchVmConnection")
              .connectHatchVmApi()
              .catch(function () {
                return null;
              }),
            n =
              t == null
                ? null
                : yield t.exchange(
                    "DELETE",
                    o("WAWebHatchVmTransport").JarvisPaths.SPACE_DELETE(e),
                  );
          return (n == null ? void 0 : n.kind) === "response" &&
            n.statusCode >= 200 &&
            n.statusCode < 300
            ? !0
            : m(e)
              ? f("delete", p(n))
              : !0;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return r("WAWebHatchSpacesManager")
        .getCatalog()
        .spaces.some(function (t) {
          return t.itemKey === e;
        });
    }
    function p(e) {
      return (function (e) {
        if (e == null) return "no_session";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "response" &&
          "statusCode" in e
        ) {
          var t = e.statusCode;
          return "http." + t;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "kind" in e
        ) {
          var n = e.kind;
          return n;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function _(e) {
      var t;
      return e.kind === "Rejected"
        ? "rejected." + ((t = e.statusCode) != null ? t : "none")
        : e.kind.toLowerCase();
    }
    function f(t, n) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-space-actions: ",
                " failed reason=",
                "",
              ])),
            t,
            n,
          )
          .sendLogs("hatch-space-action-failed"),
        !1
      );
    }
    ((l.updateHatchSpacePinned = s), (l.deleteHatchSpace = c));
  },
  98,
);

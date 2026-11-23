__d(
  "WAWebHatchSpaceActions",
  [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchSpacesManager",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(e, t) {
      var n = t ? "pin" : "unpin",
        r = await o("WAWebHatchVmConnection")
          .connectHatchVmApi()
          .catch(o("WAWebNullFunc").returnNull);
      if (r == null) return f(n, "no_session");
      var a = await r.request(
        "POST",
        o("WAWebHatchVmTransport").JarvisPaths.ARTIFACTS_PIN,
        {
          body: new TextEncoder().encode(
            JSON.stringify({ artifact_ref: "space:" + e, pinned: t }),
          ),
        },
      );
      return a.kind !== "Ok"
        ? f(n, p(a))
        : o("WAWebHatchJsonReaders").readBool(
              o("WAWebHatchJsonReaders").readObject(a.value, "artifact"),
              "is_pinned",
            ) !== t
          ? f(n, "not_confirmed")
          : !0;
    }
    async function u(e, t) {
      var n = t.trim();
      if (n === "") return _("empty_name");
      var r = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      if (r == null) return _("no_session");
      var a = await r.request(
        "POST",
        o("WAWebHatchVmTransport").JarvisPaths.SPACE_RENAME,
        {
          body: new TextEncoder().encode(JSON.stringify({ name: n, slug: e })),
        },
      );
      if (a.kind !== "Ok") return _(p(a));
      var i = o("WAWebHatchJsonReaders").readString(a.value, "name");
      return i == null || o("WAWebHatchJsonReaders").isBlankText(i)
        ? _("not_confirmed")
        : i;
    }
    async function c(e) {
      var t = await o("WAWebHatchVmConnection")
          .connectHatchVmApi()
          .catch(o("WAWebNullFunc").returnNull),
        n =
          t == null
            ? null
            : await t.exchange(
                "DELETE",
                o("WAWebHatchVmTransport").JarvisPaths.SPACE_DELETE(e),
              );
      return (n == null ? void 0 : n.kind) === "response" &&
        n.statusCode >= 200 &&
        n.statusCode < 300
        ? !0
        : d(e)
          ? f("delete", m(n))
          : !0;
    }
    function d(e) {
      return r("WAWebHatchSpacesManager")
        .getCatalog()
        .spaces.some(function (t) {
          return t.itemKey === e;
        });
    }
    function m(e) {
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
    function p(e) {
      var t;
      return e.kind === "Rejected"
        ? "rejected." + ((t = e.statusCode) != null ? t : "none")
        : e.kind.toLowerCase();
    }
    function _(e) {
      return (f("rename", e), null);
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
    ((l.updateHatchSpacePinned = s),
      (l.renameHatchSpace = u),
      (l.deleteHatchSpace = c));
  },
  98,
);

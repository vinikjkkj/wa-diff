__d(
  "CometBTManifestLoader",
  [
    "BootloaderEvents",
    "BtLongtailHashFalcoEvent",
    "ClientConsistencyEventEmitter",
    "FBLogger",
    "ODS",
    "Promise",
    "SiteData",
    "TrustedTypes",
    "XHRRequest",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "justknobx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set();
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, o, a) {
            var i = yield new (s || (s = n("Promise")))(function (n, i) {
              new (r("XHRRequest"))(e + "/btmanifest/" + o + "/" + t + "/" + a)
                .setMethod("GET")
                .setResponseHandler(function (e) {
                  return n(e.toString());
                })
                .setErrorHandler(function (e) {
                  return i(e);
                })
                .send();
            });
            if (typeof i != "string")
              throw r("FBLogger")(
                "binary_transparency",
                "bt_invalid_manifest_response",
              ).mustfixThrow("Invalid response from BT manifest endpoint");
            return i;
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(t, n) {
      (e || (e = o("ODS"))).bumpEntityKey(
        454,
        "obc.www.all",
        "bt.comet_manifest_loader.0." +
          o("SiteData").pkg_cohort +
          "." +
          t +
          "." +
          n,
      );
    }
    function p(e, t, n) {
      var o;
      if (n instanceof Error) o = n;
      else if (typeof n == "object") {
        var a = JSON.stringify(n);
        o = r("err")(
          "(XHRRequest): %s",
          a.slice(0, 300) + (a.length > 300 ? "..." : ""),
        );
      } else o = r("err")(n);
      r("FBLogger")("binary_transparency", "bt_download_manifest_error")
        .catching(o)
        .mustfix(
          'Unable to download and inject BT manifest "%s" for version: %s',
          t,
          e,
        );
    }
    var _ = r("TrustedTypes").createPolicy("bt-manifest", {
      createScript: function (t) {
        return t;
      },
    });
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !(
              !o("SiteData").manifest_origin ||
              o("SiteData").manifest_version_prefix == null ||
              o("SiteData").manifest_base_uri == null
            )
          ) {
            var n = e + "_" + t,
              a = "" + o("SiteData").manifest_version_prefix + e;
            if (!u.has(n)) {
              (m(t, "start"), u.add(n));
              try {
                var i,
                  l = document.createElement("script"),
                  s = yield c(
                    o("SiteData").manifest_base_uri,
                    o("SiteData").manifest_origin,
                    a,
                    t,
                  );
                (r("justknobx")._("3786")
                  ? (l.text = _.createScript(s))
                  : (l.text = s),
                  (l.type = "application/json"),
                  l.setAttribute("name", "binary-transparency-manifest"),
                  (l.dataset.manifestRev = a),
                  (l.dataset.manifestType = t),
                  (i = document.head) == null || i.appendChild(l),
                  m(t, "complete"));
              } catch (e) {
                var d = r("getErrorSafe")(e);
                (m(t, "failed"), p(a, t, d), u.delete(n));
              }
            }
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      (r("promiseDone")(f(o("SiteData").client_revision, "main")),
        o("BootloaderEvents").onResourceInLongTailBTManifest(function (e) {
          (r("promiseDone")(f(o("SiteData").client_revision, "longtail")),
            e.hashes.forEach(function (t) {
              r("BtLongtailHashFalcoEvent").log(function () {
                return {
                  client_revision: String(o("SiteData").client_revision),
                  ef_page: o("SiteData").ef_page || "",
                  hash: t,
                  pkg_cohort: o("SiteData").pkg_cohort,
                  reference: e.source,
                  rls_id: o("SiteData").hsi,
                };
              });
            }));
        }),
        r("ClientConsistencyEventEmitter").addListener(
          "newRevision",
          function (e) {
            (r("promiseDone")(f(e, "main")),
              r("promiseDone")(f(e, "longtail")));
          },
        ));
    }
    l.init = h;
  },
  98,
);

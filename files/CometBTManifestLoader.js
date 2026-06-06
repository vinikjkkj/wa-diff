__d(
  "CometBTManifestLoader",
  [
    "BootloaderEvents",
    "BtLongtailHashFalcoEvent",
    "ClientConsistencyEventEmitter",
    "FBLogger",
    "ODS",
    "SiteData",
    "XHRRequest",
    "err",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set();
    async function u(e, t, n, o) {
      var a = await new Promise(function (a, i) {
        new (r("XHRRequest"))(e + "/btmanifest/" + n + "/" + t + "/" + o)
          .setMethod("GET")
          .setResponseHandler(function (e) {
            return a(e.toString());
          })
          .setErrorHandler(function (e) {
            return i(e);
          })
          .send();
      });
      if (typeof a != "string")
        throw r("FBLogger")(
          "binary_transparency",
          "bt_invalid_manifest_response",
        ).mustfixThrow("Invalid response from BT manifest endpoint");
      return a;
    }
    function c(t, n) {
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
    function d(e, t, n) {
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
    async function m(e, t) {
      if (
        !(
          !o("SiteData").manifest_origin ||
          o("SiteData").manifest_version_prefix == null ||
          o("SiteData").manifest_base_uri == null
        )
      ) {
        var n = e + "_" + t,
          a = "" + o("SiteData").manifest_version_prefix + e;
        if (!s.has(n)) {
          (c(t, "start"), s.add(n));
          try {
            var i,
              l = document.createElement("script"),
              m = await u(
                o("SiteData").manifest_base_uri,
                o("SiteData").manifest_origin,
                a,
                t,
              );
            ((l.innerText = m),
              (l.type = "application/json"),
              l.setAttribute("name", "binary-transparency-manifest"),
              (l.dataset.manifestRev = a),
              (l.dataset.manifestType = t),
              (i = document.head) == null || i.appendChild(l),
              c(t, "complete"));
          } catch (e) {
            var p = r("getErrorSafe")(e);
            (c(t, "failed"), d(a, t, p), s.delete(n));
          }
        }
      }
    }
    function p() {
      (r("promiseDone")(m(o("SiteData").client_revision, "main")),
        o("BootloaderEvents").onResourceInLongTailBTManifest(function (e) {
          (r("promiseDone")(m(o("SiteData").client_revision, "longtail")),
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
            (r("promiseDone")(m(e, "main")),
              r("promiseDone")(m(e, "longtail")));
          },
        ));
    }
    l.init = p;
  },
  98,
);

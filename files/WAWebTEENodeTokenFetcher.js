__d(
  "WAWebTEENodeTokenFetcher",
  [
    "WABase64",
    "WALogger",
    "WAWebCanonicalUtils",
    "WAWebOHAIClient",
    "WAWebTeeRequestConfig",
    "WAWebTheiaACSClient",
    "WAWebTrustedNodeProto",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t) {
      var n = o("WAWebTeeRequestConfig").getTeeRequestConfig(t);
      try {
        if (!o("WAWebCanonicalUtils").isCanonicalPresent())
          throw r("err")(
            "canonical not present (login/pair required for RT1 ACS)",
          );
        var a = await c(n.acsProjectName),
          i = new URL(
            "https://" +
              n.teeHost +
              "/" +
              o("WAWebTeeRequestConfig").NODE_TOKEN_PATH,
          ),
          l = await o("WAWebOHAIClient").fetchOHAIGet({ headers: a, url: i }),
          u = l.hop,
          d = l.response,
          m = u === "relay" ? "OHAI relay" : "TRS";
        if (!d.ok) {
          var p = "";
          try {
            p = await d.text();
          } catch (e) {
            p = "<unreadable>";
          }
          throw r("err")(
            "get-host-info rejected by the " +
              m +
              " with status " +
              d.status +
              ": " +
              p,
          );
        }
        var _ = new Uint8Array(await d.arrayBuffer()),
          f = o("WAWebTrustedNodeProto").parseTrustedNode(_);
        return (
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[TEE][RT1] fetched node token (",
                  " bytes)",
                ])),
              f.nodeToken.length,
            )
            .sendLogs("tee-rt1-success")
            .tags("tee"),
          {
            chipId: f.chipId,
            fetchedAtMs: Date.now(),
            nodeToken: f.nodeToken,
            serializedTrustedNode: f.serializedTrustedNode,
          }
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[TEE][RT1] fetchNodeToken failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("tee-rt1-error")
            .tags("tee"),
          e
        );
      }
    }
    async function c(e) {
      var t = await o("WAWebTheiaACSClient").redeemWithTheiaAPTClient(e),
        n =
          o("WABase64").encodeB64UrlSafe(t.credential, !0) +
          "+" +
          o("WABase64").encodeB64UrlSafe(t.tag, !0),
        r = new Headers();
      return (
        r.append("x-acs-token", n),
        r.append("x-acs-configid", t.serverConfigId),
        r.append("x-acs-project-name", e),
        r.append("x-acs-hash-algorithm", "sha256"),
        r
      );
    }
    l.fetchNodeToken = u;
  },
  98,
);

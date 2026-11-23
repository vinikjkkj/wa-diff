__d(
  "WAWebHatchAgentDocuments",
  [
    "WABase64",
    "WALogger",
    "WAWebHatchAgentDocument.flow",
    "WAWebHatchAgentDocumentDecoder",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 2e4,
      m = o("WAWebHatchAgentDocument.flow").HATCH_AGENT_DOCUMENT_READ_BYTES - 1,
      p = { kind: "account_changed" },
      _ = { kind: "failed" },
      f = { kind: "saved" },
      g = { kind: "too_large" },
      h = { kind: "failed", reason: "offline" },
      y = Promise.resolve();
    function C() {
      return R(_, async function (e) {
        var t = await Promise.all([E(e), k(e, "soul"), k(e, "memory")]),
          n = t[0],
          r = n.isProfileRead,
          o = n.profile,
          a = t[1],
          i = t[2];
        return a.kind === "failed" || i.kind === "failed"
          ? _
          : {
              isProfileRead: r,
              kind: "loaded",
              memory: i,
              profile: o,
              soul: a,
            };
      });
    }
    function b(e) {
      return R(_, function (t) {
        return L(t, e);
      });
    }
    function v(t, n) {
      var r = new TextEncoder().encode(n);
      return r.length > m
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-agent-documents/save-failed result=too_large",
                ])),
            )
            .sendLogs("hatch-agent-documents-save-failed"),
          Promise.resolve(g))
        : R(h, function (e, n) {
            return D(async function () {
              if (
                o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== n
              )
                return p;
              var a = await T(
                  e,
                  o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_WRITE,
                  {
                    append: !1,
                    create_parent: !0,
                    data_base64: o("WABase64").encodeB64(r),
                    overwrite: !0,
                    path: o("WAWebHatchAgentDocument.flow")
                      .HATCH_AGENT_DOCUMENT_FILE_NAMES[t],
                  },
                ),
                i = S(a)
                  ? h
                  : ((typeof a == "object" && a !== null) ||
                        typeof a == "function") &&
                      a.kind === "Ok"
                    ? f
                    : ((typeof a == "object" && a !== null) ||
                          typeof a == "function") &&
                        a.kind === "Rejected"
                      ? { kind: "failed", reason: "generic" }
                      : ((typeof a == "object" && a !== null) ||
                            typeof a == "function") &&
                          a.kind === "Failure" &&
                          a.reason === "TIMEOUT"
                        ? { kind: "no_response", reason: "timeout" }
                        : ((typeof a == "object" && a !== null) ||
                              typeof a == "function") &&
                            a.kind === "Failure" &&
                            a.reason === "TRANSPORT"
                          ? { kind: "no_response", reason: "offline" }
                          : (((typeof a == "object" && a !== null) ||
                                typeof a == "function") &&
                                a.kind === "Failure") ||
                              (((typeof a == "object" && a !== null) ||
                                typeof a == "function") &&
                                a.kind === "Unreadable")
                            ? { kind: "no_response", reason: "generic" }
                            : (function () {
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    a,
                                );
                              })();
              return (
                i.kind !== "saved" &&
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-agent-documents/save-failed call=",
                          " result=",
                          "",
                        ])),
                      a.kind,
                      i.kind,
                    )
                    .sendLogs("hatch-agent-documents-save-failed"),
                i
              );
            });
          });
    }
    function S(e) {
      return e.kind === "Failure" && e.reason === "NO_CHANNEL";
    }
    async function R(e, t) {
      var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        r = await o("WAWebHatchVmConnection").connectHatchVmApi();
      if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== n)
        return p;
      if (r == null) return e;
      var a = await t(r, n);
      return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() === n
        ? a
        : p;
    }
    function L(e, t) {
      return D(function () {
        return T(e, o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_READ, {
          len: o("WAWebHatchAgentDocument.flow")
            .HATCH_AGENT_DOCUMENT_READ_BYTES,
          offset: 0,
          path: o("WAWebHatchAgentDocument.flow")
            .HATCH_AGENT_DOCUMENT_FILE_NAMES[t],
        }).then(function (e) {
          return I(
            e,
            o("WAWebHatchAgentDocumentDecoder").decodeHatchAgentDocumentRead(e),
          );
        });
      });
    }
    function E(e) {
      return D(function () {
        return e
          .request("GET", o("WAWebHatchVmTransport").JarvisPaths.IDENTITY, {
            responseShape: "flat-or-envelope",
            timeoutMs: d,
          })
          .then(function (e) {
            return (
              e.kind !== "Ok" &&
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-agent-documents/profile-failed call=",
                        "",
                      ])),
                    e.kind,
                  )
                  .sendLogs("hatch-agent-documents-profile-failed"),
              {
                isProfileRead: o(
                  "WAWebHatchAgentDocumentDecoder",
                ).isHatchAgentProfileRead(e),
                profile: o(
                  "WAWebHatchAgentDocumentDecoder",
                ).decodeHatchAgentProfile(e),
              }
            );
          });
      });
    }
    function k(e, t) {
      return T(e, o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_STAT, {
        path: o("WAWebHatchAgentDocument.flow").HATCH_AGENT_DOCUMENT_FILE_NAMES[
          t
        ],
      }).then(function (e) {
        return I(
          e,
          o("WAWebHatchAgentDocumentDecoder").decodeHatchAgentDocumentStat(e),
        );
      });
    }
    function I(e, t) {
      return (
        t.kind === "failed" &&
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-agent-documents/read-failed call=",
                  "",
                ])),
              e.kind,
            )
            .sendLogs("hatch-agent-documents-read-failed"),
        t
      );
    }
    function T(e, t, n) {
      return e.request("POST", t, {
        body: new TextEncoder().encode(JSON.stringify(n)),
        responseShape: "flat-or-envelope",
        timeoutMs: d,
      });
    }
    function D(e) {
      var t = y.then(e);
      return (
        (y = t.then(
          o("WAWebNullFunc").returnNull,
          o("WAWebNullFunc").returnNull,
        )),
        t
      );
    }
    ((l.readHatchAgentDocumentsOverview = C),
      (l.readHatchAgentDocument = b),
      (l.saveHatchAgentDocument = v));
  },
  98,
);

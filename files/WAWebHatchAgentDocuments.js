__d(
  "WAWebHatchAgentDocuments",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WAWebHatchAgentDocument.flow",
    "WAWebHatchAgentDocumentDecoder",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 2e4,
      p = o("WAWebHatchAgentDocument.flow").HATCH_AGENT_DOCUMENT_READ_BYTES - 1,
      _ = { kind: "account_changed" },
      f = { kind: "failed" },
      g = { kind: "saved" },
      h = { kind: "too_large" },
      y = { kind: "failed", reason: "offline" },
      C = (d || (d = n("Promise"))).resolve();
    function b() {
      return L(
        f,
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield (d || (d = n("Promise"))).all([
                I(e),
                T(e, "soul"),
                T(e, "memory"),
              ]),
              r = t[0],
              o = r.isProfileRead,
              a = r.profile,
              i = t[1],
              l = t[2];
            return i.kind === "failed" || l.kind === "failed"
              ? f
              : {
                  isProfileRead: o,
                  kind: "loaded",
                  memory: l,
                  profile: a,
                  soul: i,
                };
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    }
    function v(e) {
      return L(f, function (t) {
        return k(t, e);
      });
    }
    function S(t, r) {
      var a = new TextEncoder().encode(r);
      return a.length > p
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-agent-documents/save-failed result=too_large",
                ])),
            )
            .sendLogs("hatch-agent-documents-save-failed"),
          (d || (d = n("Promise"))).resolve(h))
        : L(y, function (e, r) {
            return $(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (
                  o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !==
                  r
                )
                  return _;
                var n = yield x(
                    e,
                    o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_WRITE,
                    {
                      append: !1,
                      create_parent: !0,
                      data_base64: o("WABase64").encodeB64(a),
                      overwrite: !0,
                      path: o("WAWebHatchAgentDocument.flow")
                        .HATCH_AGENT_DOCUMENT_FILE_NAMES[t],
                    },
                  ),
                  i = R(n)
                    ? y
                    : ((typeof n == "object" && n !== null) ||
                          typeof n == "function") &&
                        n.kind === "Ok"
                      ? g
                      : ((typeof n == "object" && n !== null) ||
                            typeof n == "function") &&
                          n.kind === "Rejected"
                        ? { kind: "failed", reason: "generic" }
                        : ((typeof n == "object" && n !== null) ||
                              typeof n == "function") &&
                            n.kind === "Failure" &&
                            n.reason === "TIMEOUT"
                          ? { kind: "no_response", reason: "timeout" }
                          : ((typeof n == "object" && n !== null) ||
                                typeof n == "function") &&
                              n.kind === "Failure" &&
                              n.reason === "TRANSPORT"
                            ? { kind: "no_response", reason: "offline" }
                            : (((typeof n == "object" && n !== null) ||
                                  typeof n == "function") &&
                                  n.kind === "Failure") ||
                                (((typeof n == "object" && n !== null) ||
                                  typeof n == "function") &&
                                  n.kind === "Unreadable")
                              ? { kind: "no_response", reason: "generic" }
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      n,
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
                        n.kind,
                        i.kind,
                      )
                      .sendLogs("hatch-agent-documents-save-failed"),
                  i
                );
              }),
            );
          });
    }
    function R(e) {
      return e.kind === "Failure" && e.reason === "NO_CHANNEL";
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            r = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== n)
            return _;
          if (r == null) return e;
          var a = yield t(r, n);
          return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() === n
            ? a
            : _;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return $(function () {
        return x(e, o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_READ, {
          len: o("WAWebHatchAgentDocument.flow")
            .HATCH_AGENT_DOCUMENT_READ_BYTES,
          offset: 0,
          path: o("WAWebHatchAgentDocument.flow")
            .HATCH_AGENT_DOCUMENT_FILE_NAMES[t],
        }).then(function (e) {
          return D(
            e,
            o("WAWebHatchAgentDocumentDecoder").decodeHatchAgentDocumentRead(e),
          );
        });
      });
    }
    function I(e) {
      return $(function () {
        return e
          .request("GET", o("WAWebHatchVmTransport").JarvisPaths.IDENTITY, {
            responseShape: "flat-or-envelope",
            timeoutMs: m,
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
    function T(e, t) {
      return x(e, o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_STAT, {
        path: o("WAWebHatchAgentDocument.flow").HATCH_AGENT_DOCUMENT_FILE_NAMES[
          t
        ],
      }).then(function (e) {
        return D(
          e,
          o("WAWebHatchAgentDocumentDecoder").decodeHatchAgentDocumentStat(e),
        );
      });
    }
    function D(e, t) {
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
    function x(e, t, n) {
      return e.request("POST", t, {
        body: new TextEncoder().encode(JSON.stringify(n)),
        responseShape: "flat-or-envelope",
        timeoutMs: m,
      });
    }
    function $(e) {
      var t = C.then(e);
      return (
        (C = t.then(
          o("WAWebNullFunc").returnNull,
          o("WAWebNullFunc").returnNull,
        )),
        t
      );
    }
    ((l.readHatchAgentDocumentsOverview = b),
      (l.readHatchAgentDocument = v),
      (l.saveHatchAgentDocument = S));
  },
  98,
);

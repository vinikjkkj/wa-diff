__d(
  "WAWebMsgKey",
  [
    "WALogger",
    "WARandomHex",
    "WAWebMsgKeyNewId",
    "WAWebParseMsgKeyString",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (function () {
        function t(n) {
          var a = n;
          if (!a) throw r("err")("MsgKey error: obj is null/undefined");
          a.id instanceof t &&
            ((a = a.id),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "MsgKey error: id is already a MsgKey",
                ])),
            ));
          var i = !r("isStringNullOrEmpty")(a.id),
            l = a.from != null && a.to != null && i,
            p = a.fromMe !== void 0 && a.remote != null && i,
            _,
            f,
            g,
            h,
            y,
            C,
            b,
            v = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (v) {
            if (l && p)
              throw (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Unclear constructor MsgKey",
                    ])),
                ),
                r("err")("MsgKey error: unclear which constructor to use")
              );
            if (!l && !p)
              throw (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "No matching constructor MsgKey",
                    ])),
                ),
                r("err")("MsgKey error: don't have a matching constructor")
              );
            if (l) {
              var S = a;
              if (
                ((_ = S.from),
                (g = S.id),
                (h = S.participant),
                (y = S.selfDir),
                (f = S.to),
                !(_ instanceof r("WAWebWid")) ||
                  !(f instanceof r("WAWebWid")) ||
                  (h && !(h instanceof r("WAWebWid"))))
              )
                throw (
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Incorrect Wid MsgKey",
                      ])),
                  ),
                  r("err")("MsgKey error: something is not a wid")
                );
              var R = r("WAWebWid").equals(_, f);
              ((y = R ? y : void 0),
                R && o("WAWebUserPrefsMeUser").isMePrimary(_)
                  ? ((C = y === "out"), (b = f))
                  : o("WAWebUserPrefsMeUser").isMePrimary(_)
                    ? ((C = !0), (b = f))
                    : o("WAWebUserPrefsMeUser").isMePrimary(f)
                      ? ((C = !1), (b = _))
                      : R &&
                          (r("WAWebWid").isGroup(_) ||
                            r("WAWebWid").isBroadcast(_))
                        ? ((C = !0), (b = _))
                        : o("WALogger").WARN(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "MsgKey case error",
                              ])),
                          ),
                C !== void 0 && (this.fromMe = C),
                b && (this.remote = b),
                g && (this.id = g));
            } else if (p) {
              var L = a;
              if (
                ((C = L.fromMe),
                (g = L.id),
                (h = L.participant),
                (b = L.remote),
                !(b instanceof r("WAWebWid")) ||
                  (h && !(h instanceof r("WAWebWid"))))
              )
                throw (
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Incorrect Wid MsgKey",
                      ])),
                  ),
                  r("err")("MsgKey error: something is not a wid")
                );
              (o("WAWebUserPrefsMeUser").isMePrimary(b) &&
                (y = C === !0 ? "out" : "in"),
                C !== void 0 && (this.fromMe = C),
                b && (this.remote = b),
                g && (this.id = g));
            }
          } else
            throw r("err")(
              "MsgKey error: me is undefined. Running tests? Call setupGlobalsForTests first.",
            );
          var E = [this.fromMe, this.remote, this.id];
          (y !== void 0 && ((this.self = y), E.push(this.self)),
            h !== void 0 && ((this.participant = h), E.push(this.participant)),
            (this._serialized = E.join("_")));
        }
        var a = t.prototype;
        return (
          (a.toString = function () {
            return this._serialized;
          }),
          (a.clone = function () {
            return new t({
              fromMe: this.fromMe,
              remote: this.remote,
              id: this.id,
              participant: this.participant,
            });
          }),
          (a.equals = function (n) {
            return n instanceof t && this.toString() === n.toString();
          }),
          (t.fromString = function (n) {
            if (n == null)
              throw r("err")(
                "MsgKey.fromString error: str is null or not a string",
              );
            return t.from(n);
          }),
          (t.from = function (n) {
            if (n instanceof t) return n;
            var e;
            return (
              typeof n == "string"
                ? (e = r("WAWebParseMsgKeyString")(n))
                : (e = n),
              new t({
                fromMe: e.fromMe,
                remote: o("WAWebWidFactory").createWidFromWidLike(e.remote),
                id: e.id,
                participant:
                  e.participant != null
                    ? o("WAWebWidFactory").createWidFromWidLike(e.participant)
                    : void 0,
              })
            );
          }),
          (t.newId = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e = yield o("WAWebMsgKeyNewId").getMsgKeyNewSHA256Id();
                return e;
              } catch (e) {
                var n = r("getErrorSafe")(e);
                return (
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "getMsgKeyNewId",
                        ])),
                    )
                    .catching(n)
                    .sendLogs("msg_key: error generating sha256 message key"),
                  t.newId_DEPRECATED()
                );
              }
            });
            function a() {
              return e.apply(this, arguments);
            }
            return a;
          })()),
          (t.newId_DEPRECATED = function () {
            return "3EB0" + o("WARandomHex").randomHex(8);
          }),
          t
        );
      })();
    l.default = _;
  },
  98,
);

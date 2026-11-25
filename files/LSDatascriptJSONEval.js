__d(
  "LSDatascriptJSONEval",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "LS",
    "LSKeyReturningSprocs",
    "LSMaybeDeferredImports",
    "LSPrivacySensitiveTables",
    "LSProtectedCallables",
    "LSSecureKeyReturningSprocs",
    "LSServerProgramHardening",
    "getErrorSafe",
    "isPromise",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("LSMaybeDeferredImports").wrapJSResourceForInteractionMaybeSync(
        r("JSResourceForInteraction")("LSLocalize").__setRef(
          "LSDatascriptJSONEval",
        ),
      );
    function d(e, t, n) {
      if ((u || (u = r("isPromise")))(e)) return e.then(t, n);
      try {
        return t(e);
      } catch (e) {
        var o = r("getErrorSafe")(e);
        if (n) return n(o);
        throw o;
      }
    }
    var m = (function () {
      function t(e, t, n, o, a) {
        var i = this;
        (o === void 0 && (o = []),
          a === void 0 && (a = {}),
          (this.$4 = {}),
          (this.$5 = []),
          (this.$6 = null),
          (this.$18 = function (e) {
            return d(
              i.$19(e),
              function (e) {
                return e;
              },
              function (t) {
                throw (
                  r("FBLogger")("messenger_web")
                    .catching(t)
                    .mustfix(
                      "Error evaluating step op: %s",
                      Array.isArray(e) ? e[0] : "<primitive value>",
                    ),
                  t
                );
              },
            );
          }),
          (this.$1 = t),
          (this.$2 = e),
          (this.$3 = n),
          (this.$7 = a.protectedCalls),
          (this.$8 = a.keyReturningSprocs),
          (this.$9 = a.secureKeyReturningSprocs),
          (this.$10 = a.restrictedOps),
          (this.$11 = a.restrictedTables));
        for (var l = 0; l < o.length; l++) this.$4[l] = o[l];
      }
      var a = t.prototype;
      return (
        (a.$12 = function (t, n) {
          var e,
            o,
            a = this.$10;
          if (a != null) {
            var i =
              (e = (o = this.$2) == null ? void 0 : o.name) != null
                ? e
                : "<unnamed>";
            if (a === "enforce")
              throw r("FBLogger")(
                "wmi",
                "ls_server_program_restricted_op",
              ).mustfixThrow("Refused op %s in server program %s: %s", t, i, n);
            r("FBLogger")("wmi", "ls_server_program_restricted_op").mustfix(
              "Server program %s used restricted op %s: %s",
              i,
              t,
              n,
            );
          }
        }),
        (a.$13 = function (t, n, r) {
          if (this.$10 != null)
            for (var e = 0; e < r; e++) {
              var a = n[e];
              if (typeof a != "string") {
                this.$12(t, "operation id is not a string literal");
                return;
              }
              if (!o("LSServerProgramHardening").isCanonicalCallableName(a)) {
                this.$12(t, "operation id is not a canonical name");
                return;
              }
            }
        }),
        (a.$14 = function (t, n) {
          var e = this.$7;
          if (!(e == null || typeof n != "string")) {
            var a =
              t === "native operation"
                ? o("LSProtectedCallables").isProtectedNativeOperation(n)
                : o("LSProtectedCallables").isProtectedStoredProcedure(n);
            if (a) {
              if (e === "enforce")
                throw r("FBLogger")(
                  "wmi",
                  "ls_server_program_protected_call",
                ).mustfixThrow(
                  "Refused protected %s in a server program: %s",
                  t,
                  n,
                );
              r("FBLogger")("wmi", "ls_server_program_protected_call").mustfix(
                "Server program called protected %s: %s",
                t,
                n,
              );
            }
          }
        }),
        (a.$15 = function (t) {
          var e = this.$8;
          if (
            !(
              e == null ||
              typeof t != "string" ||
              !o("LSKeyReturningSprocs").isKeyReturningStoredProcedure(t)
            )
          ) {
            if (e === "enforce")
              throw r("FBLogger")(
                "wmi",
                "ls_server_program_key_returning_sproc",
              ).mustfixThrow(
                "Refused key-returning stored procedure in a server program: %s",
                t,
              );
            r("FBLogger")(
              "wmi",
              "ls_server_program_key_returning_sproc",
            ).mustfix(
              "Server program called key-returning stored procedure: %s",
              t,
            );
          }
        }),
        (a.$16 = function (t) {
          var e = this.$9;
          if (
            !(
              e == null ||
              typeof t != "string" ||
              !o(
                "LSSecureKeyReturningSprocs",
              ).isSecureKeyReturningStoredProcedure(t)
            )
          ) {
            if (e === "enforce")
              throw r("FBLogger")(
                "wmi",
                "ls_server_program_secure_key_sproc",
              ).mustfixThrow(
                "Refused secure-key stored procedure in a server program: %s",
                t,
              );
            r("FBLogger")("wmi", "ls_server_program_secure_key_sproc").mustfix(
              "Server program called secure-key stored procedure: %s",
              t,
            );
          }
        }),
        (a.$17 = function (t) {
          var e = this.$11;
          if (e != null) {
            var n = this.$1.db.metadata,
              a = n.tableNames[n.tableIds[t]].name;
            if (o("LSPrivacySensitiveTables").isPrivacySensitiveTable(a)) {
              if (e === "enforce")
                throw r("FBLogger")(
                  "wmi",
                  "ls_server_program_table_access",
                ).mustfixThrow(
                  "Refused privacy sensitive table %s in a server program",
                  a,
                );
              r("FBLogger")("wmi", "ls_server_program_table_access").mustfix(
                "Server program accessed privacy sensitive table %s",
                a,
              );
            }
          }
          return this.$1.db.table(t);
        }),
        (a.eval = function () {
          return this.$2 == null
            ? this.$1.resolveGuaranteeAsync([])
            : this.$1.resolveGuaranteeAsync(this.$18(this.$2.step));
        }),
        (a.$19 = function (o) {
          var t = this,
            a,
            i,
            l,
            u,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C;
          if (!Array.isArray(o)) return o;
          var b = o[0],
            v = babelHelpers.arrayLikeToArray(o).slice(1),
            S = v;
          switch (b) {
            case 8:
              return S.map(this.$18);
            case 2:
              return this.$4[S[0]];
            case 3:
              return d(this.$18(S[1]), function (e) {
                return (t.$4[S[0]] = e);
              });
            case 4:
              return d(this.$18(S[2]), function (e) {
                for (var n = S[0], r = S[1], o = 0; o < r; o++, n++)
                  t.$4[n] = e[o];
                return e;
              });
            case 12: {
              for (var R = S[0], L = S[1], E = [], k = R; k < L; k++)
                E[k] = this.$4[k];
              return E;
            }
            case 1: {
              for (
                var I,
                  T = function (n) {
                    I = d(I, function () {
                      return t.$18(S[n]);
                    });
                  },
                  D = 0;
                D < S.length;
                D++
              )
                T(D);
              return I;
            }
            case 5:
              return (
                this.$13(b, S, 1),
                this.$14("stored procedure", S[0]),
                this.$15(S[0]),
                this.$16(S[0]),
                (a = this.$1).storedProcedure.apply(a, S.map(this.$18))
              );
            case 6:
              return (
                this.$13(b, S, 2),
                this.$14("native type operation", S[1]),
                (i = this.$1).nativeTypeOperation.apply(i, S.map(this.$18))
              );
            case 7:
              return (
                this.$13(b, S, 1),
                this.$14("native operation", S[0]),
                (l = this.$1).nativeOperation.apply(l, S.map(this.$18))
              );
            case 9:
              return;
            case 10:
              return 1 / 0;
            case 11:
              return NaN;
            case 13:
              return this.$18(S[0]) ? "1" : "0";
            case 14:
              return this.$1.blobs.to_string(this.$18(S[0]));
            case 15:
              return this.$1.blobs.of_string(this.$18(S[0]));
            case 16:
              return this.$1.blob(this.$18(S[0]));
            case 17:
              return this.$1.i64.of_float(this.$18(S[0]));
            case 18: {
              var x = this.$18(S[0]);
              return x != null ? this.$1.i64.to_float(x) : void 0;
            }
            case 19:
              return this.$1.i64.from_string(this.$18(S[0]));
            case 70:
              return this.$1.i64.cast(this.$18(S[0]));
            case 20:
              return this.$1.i64.to_string(this.$18(S[0]));
            case 21:
              return (u = this.$3) == null || (u = u.gk) == null
                ? void 0
                : u[S[0]];
            case 22: {
              var $,
                P = S[0],
                N = S[1],
                M = S[2],
                w = S[3],
                A =
                  ($ = this.$3) == null ||
                  ($ = $.qe) == null ||
                  ($ = $[P]) == null ||
                  ($ = $[N]) == null
                    ? void 0
                    : $[M];
              if (A == null) return A;
              switch (w) {
                case "BOOL":
                case "STR":
                  return A;
                case "I64": {
                  if (typeof A != "object")
                    throw r("FBLogger")("messenger_web").mustfixThrow(
                      "Cannot convert value to string",
                    );
                  return this.$1.i64.from_string(A.toString());
                }
              }
              return;
            }
            case 23:
              return this.$18(S[0])
                ? this.$18(S[1])
                : S[2] != null
                  ? this.$18(S[2])
                  : void 0;
            case 24:
              return this.$18(S[0]) || this.$18(S[1]);
            case 25:
              return this.$18(S[0]) && this.$18(S[1]);
            case 26:
              return !this.$18(S[0]);
            case 27:
              return this.$18(S[0]) == null;
            case 28:
              return this.$1.notnull(this.$18(S[0]));
            case 29:
              return this.$18(S[0]) === this.$18(S[1]);
            case 30:
              return this.$1.i64.eq(this.$18(S[0]), this.$18(S[1]));
            case 31:
              return this.$1.blobs.eq(this.$18(S[0]), this.$18(S[1]));
            case 32:
              return this.$18(S[0]) !== this.$18(S[1]);
            case 33:
              return this.$1.i64.neq(this.$18(S[0]), this.$18(S[1]));
            case 34:
              return this.$1.blobs.neq(this.$18(S[0]), this.$18(S[1]));
            case 35:
              return this.$18(S[0]) > this.$18(S[1]);
            case 36:
              return this.$1.i64.gt(this.$18(S[0]), this.$18(S[1]));
            case 37:
              return this.$1.blobs.gt(this.$18(S[0]), this.$18(S[1]));
            case 38:
              return this.$18(S[0]) >= this.$18(S[1]);
            case 39:
              return this.$1.i64.ge(this.$18(S[0]), this.$18(S[1]));
            case 40:
              return this.$1.blobs.ge(this.$18(S[0]), this.$18(S[1]));
            case 41:
              return this.$18(S[0]) < this.$18(S[1]);
            case 42:
              return this.$1.i64.lt(this.$18(S[0]), this.$18(S[1]));
            case 43:
              return this.$1.blobs.lt(this.$18(S[0]), this.$18(S[1]));
            case 44:
              return this.$18(S[0]) <= this.$18(S[1]);
            case 45:
              return this.$1.i64.le(this.$18(S[0]), this.$18(S[1]));
            case 46:
              return this.$1.blobs.le(this.$18(S[0]), this.$18(S[1]));
            case 47:
              return this.$1.throw(S[0]);
            case 48:
              return this.$1.print(this.$18(S[0]));
            case 49: {
              var F = this.$18(S[0]),
                O = S[1],
                B = this.$1.logger(F);
              switch (O) {
                case "mustfix":
                  return B.mustfix(F);
                case "info":
                  return B.info(F);
                case "warn":
                  return B.warn(F);
                case "debug":
                  return B.debug(F);
                default:
                  throw r("FBLogger")("messenger_web").mustfixThrow(
                    "Invalid logger level %s",
                    O,
                  );
              }
            }
            case 50:
              return S.length === 0
                ? this.$1.createArray()
                : (m = this.$1).createArrayWithElements.apply(
                    m,
                    this.$18(S[0]),
                  );
            case 51: {
              var W = this.$18(S[0]);
              return (W.push(this.$18(S[1])), W);
            }
            case 52:
              return this.$1.i64.of_int32(this.$18(S[0]).length);
            case 53:
              return new this.$1.Map();
            case 54:
              return this.$18(S[0]).get(this.$18(S[1]));
            case 55:
              return this.$18(S[0]).set(this.$18(S[1]), this.$18(S[2]));
            case 56:
              return this.$18(S[0]).keys();
            case 57:
              return this.$18(S[0]).delete(this.$18(S[1]));
            case 58:
              return this.$18(S[0]).has(this.$18(S[1]));
            case 59:
              return this.$18(S[0]).join(this.$18(S[1]) || "");
            case 60:
              return this.$1.i64.of_float(Date.now());
            case 61:
              return this.$1.toJSON(this.$18(S[0]));
            case 62:
              return this.$1.i64.random();
            case 63:
            case 64:
              return !0;
            case 65:
              return c.load().then(function (e) {
                var n = e.localizeV1Async;
                return n(t.$18(S[0]), t.$18(S[1]));
              });
            case 66:
              return c.load().then(function (e) {
                var n = e.localizeV2Async;
                return n(t.$18(S[0]), t.$18(S[1]));
              });
            case 68:
              return this.$18(S[0]) + this.$18(S[1]);
            case 69:
              return this.$1.i64.add(this.$18(S[0]), this.$18(S[1]));
            case 71:
              return (p = this.$3) == null || (p = p.justknob) == null
                ? void 0
                : p[S[0]];
            case 72:
              return (_ = this.$3) == null || (_ = _.iggk) == null
                ? void 0
                : _[S[0]];
            case 100:
              return this.$5[S[0]][S[1]];
            case 101: {
              if (this.$6 == null)
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "Attempting to read column ref when none exist!",
                );
              return this.$6[S[0]];
            }
            case 102:
              return this.$5[this.$18(S[0])].group_count;
            case 73:
              return this.$1.rm;
            case 74:
              return this.$18(S[0]).trim();
            case 75:
              return this.$18(S[0]).split(this.$18(S[1])).join(this.$18(S[2]));
            case 76:
              return S.map(this.$18).join("");
            case 77:
              return this.$1.like(this.$18(S[0]), this.$18(S[1]));
            case 78:
              return [0, this.$18(S[0]).length];
            case 79: {
              var q = S.map(this.$18),
                U = q[0],
                V = babelHelpers.arrayLikeToArray(q).slice(1);
              return V.includes(U);
            }
            case 80:
              return this.$18(S[1]).includes(this.$18(S[0]));
            case 81:
              return this.$18(S[0]) - this.$18(S[1]);
            case 82:
              return this.$18(S[0]) * this.$18(S[1]);
            case 83:
              return this.$18(S[0]) / this.$18(S[1]);
            case 84:
              return this.$18(S[0]) % this.$18(S[1]);
            case 91:
              return this.$1.i64.lsl_(
                this.$18(S[0]),
                this.$1.i64.to_int32(this.$18(S[1])),
              );
            case 92:
              return this.$1.i64.lsr_(
                this.$18(S[0]),
                this.$1.i64.to_int32(this.$18(S[1])),
              );
            case 93:
              return this.$1.i64.asr_(
                this.$18(S[0]),
                this.$1.i64.to_int32(this.$18(S[1])),
              );
            case 94:
              return this.$1.i64.and_(this.$18(S[0]), this.$18(S[1]));
            case 95:
              return this.$1.i64.or_(this.$18(S[0]), this.$18(S[1]));
            case 96:
              return this.$1.i64.xor(this.$18(S[0]), this.$18(S[1]));
            case 85:
              return this.$1.i64.sub(this.$18(S[0]), this.$18(S[1]));
            case 86:
              return this.$1.i64.mul(this.$18(S[0]), this.$18(S[1]));
            case 87:
              return this.$1.i64.div(this.$18(S[0]), this.$18(S[1]));
            case 88:
              return this.$1.i64.mod_(this.$18(S[0]), this.$18(S[1]));
            case 89: {
              var H = S.map(this.$18),
                G = H[0],
                z = babelHelpers.arrayLikeToArray(H).slice(1);
              return z.some(function (e) {
                return t.$1.i64.eq(G, e);
              });
            }
            case 90: {
              var j = this.$18(S[0]);
              return this.$18(S[1]).some(function (e) {
                return t.$1.i64.eq(j, e);
              });
            }
            case 97:
              return this.$18(S[0]) ? this.$18(S[1]) : this.$18(S[2]);
            case 98: {
              var K = this.$18(S[0]),
                Q = this.$18(S[1]);
              return (K || Q) && !(K && Q);
            }
            case 99:
              return (f = this.$18(S[0])) != null ? f : this.$18(S[1]);
            case 103:
              return;
            case 104:
              return (this.$12(b, "IMPORT"), n.call(null, S[0]));
            case 105: {
              for (
                var X = this.$18(S[0]),
                  Y = S[1],
                  J = r("LS").n,
                  Z,
                  ee = function (n) {
                    Z = d(Z, function () {
                      return ((t.$4[Y] = n), t.$18(S[2]));
                    });
                  },
                  te = J(
                    e || (e = babelHelpers.taggedTemplateLiteralLoose(["0"])),
                  );
                this.$1.i64.lt(te, X);
                te = this.$1.i64.add(
                  te,
                  J(s || (s = babelHelpers.taggedTemplateLiteralLoose(["2"]))),
                )
              )
                ee(te);
              return Z;
            }
            case 106:
              return this.$18(S[0]);
            case 107:
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "not equal query comparison operator not supported",
              );
            case 108:
              return { gt: this.$18(S[0]) };
            case 109:
              return { gte: this.$18(S[0]) };
            case 110:
              return { lt: this.$18(S[0]) };
            case 111:
              return { lte: this.$18(S[0]) };
            case 112:
              return S.length === 1
                ? this.$18(S[0])
                : (g = this.$1).merge.apply(g, S.map(this.$18));
            case 113: {
              var ne = S[0],
                re = S[1],
                oe = babelHelpers.arrayLikeToArray(S).slice(2),
                ae = oe.map(this.$18);
              switch (re) {
                case "ASC":
                  return (h = this.$17(ne)).fetch.apply(h, ae);
                case "DESC":
                  return (y = this.$17(ne)).fetchDesc.apply(y, ae);
              }
              return;
            }
            case 114:
              return this.$1.filter(this.$18(S[0]), function (e) {
                t.$6 = e;
                var n = t.$18(S[1]);
                return ((t.$6 = null), n);
              });
            case 115:
              return (C = this.$1).sortBy.apply(C, S.map(this.$18));
            case 116:
              return this.$1.forEach(this.$18(S[0]), function (e) {
                return e.delete();
              });
            case 117:
              return this.$1.islc(this.$18(S[0]), 0, this.$18(S[1]));
            case 118:
              return this.$1.count(this.$18(S[0]));
            case 119:
              return this.$17(S[0]).peekNextAutoIncrementId();
            case 120:
              return this.$1.forEach(this.$18(S[0]), function (e) {
                var n = e.item,
                  r = e.update,
                  o = {};
                t.$6 = n;
                for (var a = 1; a < S.length; a += 2) o[S[a]] = t.$18(S[a + 1]);
                return ((t.$6 = null), r(o));
              });
            case 121: {
              for (var ie = S[0], le = {}, se = 1; se < S.length; se += 2)
                le[S[se]] = this.$18(S[se + 1]);
              return this.$17(ie).add(le);
            }
            case 122: {
              for (var ue = S[0], ce = {}, de = 1; de < S.length; de += 2)
                ce[S[de]] = this.$18(S[de + 1]);
              return this.$17(ue).put(ce);
            }
            case 123:
              return this.$1.forEach(this.$18(S[0]), function (e) {
                var n = e.item;
                return ((t.$5[S[1]] = n), t.$18(S[2]));
              });
            case 124:
              return this.$18(S[0])
                .next()
                .then(function (e) {
                  var n = e.done,
                    r = e.value;
                  if (n) return t.$18(S[3]);
                  var o = S[1];
                  return o != null ? ((t.$5[o] = r.item), t.$18(S[2])) : 0;
                });
            case 125:
              return this.$18(S[0]).slice(0, this.$18(S[1]));
            case 126:
              return this.$1
                .groupBy(this.$18(S[0]), S[1])
                .forEach(function (e) {
                  return ((t.$5[S[2]] = e), t.$18(S[3]));
                });
            case 127:
              return this.$18(S[0]).substr(
                this.$1.i64.to_int32(this.$18(S[1])),
                this.$1.i64.to_int32(this.$18(S[2])),
              );
          }
        }),
        t
      );
    })();
    l.default = m;
  },
  98,
);

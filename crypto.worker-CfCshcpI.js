function kt(...f) {
    const n = f.reduce((l, c) => l + (c.byteLength || c.length), 0);
    const o = new Uint8Array(n);
    let s = 0;
    f.forEach(l => {
      o.set(l instanceof ArrayBuffer ? new Uint8Array(l) : l, s);
      s += l.byteLength || l.length;
    });
    return o;
  }
  Uint8Array.prototype.concat = function (...f) {
    return kt(this, ...f);
  };
  Uint8Array.prototype.toJSON = function () {
    return [...this];
  };
  Promise.prototype.finally = Promise.prototype.finally || function (f) {
    const n = o => Promise.resolve(f()).then(o);
    return this.then(o => Promise.resolve(f()).then(() => o), o => Promise.resolve(f()).then(() => Promise.reject(o)));
  };
  var $e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Fe(f) {
    return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
  }
  var Ke = {
    exports: {}
  };
  (function (f) {
    var n = function (o) {
      var y = false ? [9007199254740992] : false ? [4740992, Math.floor(900719925.4740992)] : [4740992, Math.floor(900719925.4740992) % 1e7, Math.floor(90.07199254740992)];
      var R = typeof BigInt == "function";
      function A(e, r, a, u) {
        return typeof e > "u" ? A[0] : typeof r < "u" ? +r == 10 && !a ? typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e : Se(e, r, a, u) : typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
      }
      function p(e, r) {
        this.value = e;
        this.sign = r;
        this.isSmall = false;
      }
      p.prototype = Object.create(A.prototype);
      function b(e) {
        this.value = e;
        this.sign = e < 0;
        this.isSmall = true;
      }
      b.prototype = Object.create(A.prototype);
      function S(e) {
        this.value = e;
      }
      S.prototype = Object.create(A.prototype);
      function O(e) {
        return -9007199254740992 < e && e < 9007199254740992;
      }
      function nt(e) {
        return e < 1e7 ? [e] : e < 1e14 ? [e % 1e7, Math.floor(e / 1e7)] : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)];
      }
      function ut(e) {
        _t(e);
        var r = e.length;
        if (r < 4 && dt(e, y) < 0) {
          switch (r) {
            case 0:
              return 0;
            case 1:
              return e[0];
            case 2:
              return e[0] + e[1] * 1e7;
            default:
              return e[0] + (e[1] + e[2] * 1e7) * 1e7;
          }
        }
        return e;
      }
      function _t(e) {
        for (var r = e.length; e[--r] === 0;) {
          ;
        }
        e.length = r + 1;
      }
      function yt(e) {
        var r = new Array(e);
        for (var a = -1; ++a < e;) {
          r[a] = 0;
        }
        return r;
      }
      function at(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
      }
      function Ht(e, r) {
        var a = e.length;
        var u = r.length;
        var v = new Array(a);
        var d = 0;
        var _;
        var P;
        for (P = 0; P < u; P++) {
          _ = e[P] + r[P] + d;
          d = _ >= 1e7 ? 1 : 0;
          v[P] = _ - d * 1e7;
        }
        for (; P < a;) {
          _ = e[P] + d;
          d = _ === 1e7 ? 1 : 0;
          v[P++] = _ - d * 1e7;
        }
        if (d > 0) {
          v.push(d);
        }
        return v;
      }
      function Tt(e, r) {
        return e.length >= r.length ? Ht(e, r) : Ht(r, e);
      }
      function ot(e, r) {
        var a = e.length;
        var u = new Array(a);
        var d;
        var k;
        for (k = 0; k < a; k++) {
          d = e[k] - 1e7 + r;
          r = Math.floor(d / 1e7);
          u[k] = d - r * 1e7;
          r += 1;
        }
        for (; r > 0;) {
          u[k++] = r % 1e7;
          r = Math.floor(r / 1e7);
        }
        return u;
      }
      p.prototype.add = function (e) {
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        if (this.sign !== r.sign) {
          return this.subtract(r.negate());
        }
        var a = this.value;
        var u = r.value;
        return r.isSmall ? new p(ot(a, Math.abs(u)), this.sign) : new p(a.length >= u.length ? Ht(a, u) : Ht(u, a), this.sign);
      };
      p.prototype.plus = p.prototype.add;
      b.prototype.add = function (e) {
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        var a = this.value;
        if (a < 0 !== r.sign) {
          return this.subtract(r.negate());
        }
        var u = r.value;
        if (r.isSmall) {
          if (-9007199254740992 < a + u && a + u < 9007199254740992) {
            return new b(a + u);
          }
          u = Math.abs(u) < 1e7 ? [Math.abs(u)] : Math.abs(u) < 1e14 ? [Math.abs(u) % 1e7, Math.floor(Math.abs(u) / 1e7)] : [Math.abs(u) % 1e7, Math.floor(Math.abs(u) / 1e7) % 1e7, Math.floor(Math.abs(u) / 1e14)];
        }
        return new p(ot(u, Math.abs(a)), a < 0);
      };
      b.prototype.plus = b.prototype.add;
      S.prototype.add = function (e) {
        return new S(this.value + (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e).value);
      };
      S.prototype.plus = S.prototype.add;
      function At(e, r) {
        var a = e.length;
        var u = r.length;
        var v = new Array(a);
        var d = 0;
        var _;
        var P;
        for (_ = 0; _ < u; _++) {
          P = e[_] - d - r[_];
          if (P < 0) {
            P += 1e7;
            d = 1;
          } else {
            d = 0;
          }
          v[_] = P;
        }
        for (_ = u; _ < a; _++) {
          P = e[_] - d;
          if (P < 0) {
            P += 1e7;
          } else {
            v[_++] = P;
            break;
          }
          v[_] = P;
        }
        for (; _ < a; _++) {
          v[_] = e[_];
        }
        _t(v);
        return v;
      }
      function St(e, r, a) {
        var u;
        if (dt(e, r) >= 0) {
          u = At(e, r);
        } else {
          u = At(r, e);
          a = !a;
        }
        u = ut(u);
        return typeof u == "number" ? (a && (u = -u), new b(u)) : new p(u, a);
      }
      function Mt(e, r, a) {
        var u = e.length;
        var v = new Array(u);
        var d = -r;
        var _;
        var P;
        for (_ = 0; _ < u; _++) {
          P = e[_] + d;
          d = Math.floor(P / 1e7);
          P %= 1e7;
          v[_] = P < 0 ? P + 1e7 : P;
        }
        v = ut(v);
        return typeof v == "number" ? (a && (v = -v), new b(v)) : new p(v, a);
      }
      p.prototype.subtract = function (e) {
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        if (this.sign !== r.sign) {
          return this.add(r.negate());
        }
        var a = this.value;
        var u = r.value;
        return r.isSmall ? Mt(a, Math.abs(u), this.sign) : St(a, u, this.sign);
      };
      p.prototype.minus = p.prototype.subtract;
      b.prototype.subtract = function (e) {
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        var a = this.value;
        if (a < 0 !== r.sign) {
          return this.add(r.negate());
        }
        var u = r.value;
        return r.isSmall ? new b(a - u) : Mt(u, Math.abs(a), a >= 0);
      };
      b.prototype.minus = b.prototype.subtract;
      S.prototype.subtract = function (e) {
        return new S(this.value - (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e).value);
      };
      S.prototype.minus = S.prototype.subtract;
      p.prototype.negate = function () {
        return new p(this.value, !this.sign);
      };
      b.prototype.negate = function () {
        var e = this.sign;
        var r = new b(-this.value);
        r.sign = !e;
        return r;
      };
      S.prototype.negate = function () {
        return new S(-this.value);
      };
      p.prototype.abs = function () {
        return new p(this.value, false);
      };
      b.prototype.abs = function () {
        return new b(Math.abs(this.value));
      };
      S.prototype.abs = function () {
        return new S(this.value >= 0 ? this.value : -this.value);
      };
      function Ut(e, r) {
        var a = e.length;
        var u = r.length;
        var v = a + u;
        var d = yt(v);
        var _;
        var P;
        var q;
        var W;
        var F;
        for (q = 0; q < a; ++q) {
          W = e[q];
          for (var j = 0; j < u; ++j) {
            F = r[j];
            _ = W * F + d[q + j];
            P = Math.floor(_ / 1e7);
            d[q + j] = _ - P * 1e7;
            d[q + j + 1] += P;
          }
        }
        _t(d);
        return d;
      }
      function wt(e, r) {
        var a = e.length;
        var u = new Array(a);
        var d = 0;
        var k;
        var _;
        for (_ = 0; _ < a; _++) {
          k = e[_] * r + d;
          d = Math.floor(k / 1e7);
          u[_] = k - d * 1e7;
        }
        for (; d > 0;) {
          u[_++] = d % 1e7;
          d = Math.floor(d / 1e7);
        }
        return u;
      }
      function Bt(e, r) {
        for (var a = []; r-- > 0;) {
          a.push(0);
        }
        return a.concat(e);
      }
      function st(e, r) {
        var a = Math.max(e.length, r.length);
        if (a <= 30) {
          return Ut(e, r);
        }
        a = Math.ceil(a / 2);
        var u = e.slice(a);
        var v = e.slice(0, a);
        var d = r.slice(a);
        var k = r.slice(0, a);
        var _ = st(v, k);
        var P = st(u, d);
        var q = st(v.length >= u.length ? Ht(v, u) : Ht(u, v), k.length >= d.length ? Ht(k, d) : Ht(d, k));
        var W = (_.length >= Bt(At(At(q, _), P), a).length ? Ht(_, Bt(At(At(q, _), P), a)) : Ht(Bt(At(At(q, _), P), a), _)).length >= Bt(P, 2 * a).length ? Ht(_.length >= Bt(At(At(q, _), P), a).length ? Ht(_, Bt(At(At(q, _), P), a)) : Ht(Bt(At(At(q, _), P), a), _), Bt(P, 2 * a)) : Ht(Bt(P, 2 * a), _.length >= Bt(At(At(q, _), P), a).length ? Ht(_, Bt(At(At(q, _), P), a)) : Ht(Bt(At(At(q, _), P), a), _));
        _t(W);
        return W;
      }
      function Nt(e, r) {
        return -.012 * e - .012 * r + 15e-6 * e * r > 0;
      }
      p.prototype.multiply = function (e) {
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        var a = this.value;
        var u = r.value;
        var v = this.sign !== r.sign;
        var d;
        if (r.isSmall) {
          if (u === 0) {
            return A[0];
          }
          if (u === 1) {
            return this;
          }
          if (u === -1) {
            return this.negate();
          }
          d = Math.abs(u);
          if (d < 1e7) {
            return new p(wt(a, d), v);
          }
          u = d < 1e7 ? [d] : d < 1e14 ? [d % 1e7, Math.floor(d / 1e7)] : [d % 1e7, Math.floor(d / 1e7) % 1e7, Math.floor(d / 1e14)];
        }
        return -.012 * a.length - .012 * u.length + 15e-6 * a.length * u.length > 0 ? new p(st(a, u), v) : new p(Ut(a, u), v);
      };
      p.prototype.times = p.prototype.multiply;
      function Ot(e, r, a) {
        return e < 1e7 ? new p(wt(r, e), a) : new p(Ut(r, e < 1e7 ? [e] : e < 1e14 ? [e % 1e7, Math.floor(e / 1e7)] : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)]), a);
      }
      b.prototype._multiplyBySmall = function (e) {
        return -9007199254740992 < e.value * this.value && e.value * this.value < 9007199254740992 ? new b(e.value * this.value) : Math.abs(e.value) < 1e7 ? new p(wt(Math.abs(this.value) < 1e7 ? [Math.abs(this.value)] : Math.abs(this.value) < 1e14 ? [Math.abs(this.value) % 1e7, Math.floor(Math.abs(this.value) / 1e7)] : [Math.abs(this.value) % 1e7, Math.floor(Math.abs(this.value) / 1e7) % 1e7, Math.floor(Math.abs(this.value) / 1e14)], Math.abs(e.value)), this.sign !== e.sign) : new p(Ut(Math.abs(this.value) < 1e7 ? [Math.abs(this.value)] : Math.abs(this.value) < 1e14 ? [Math.abs(this.value) % 1e7, Math.floor(Math.abs(this.value) / 1e7)] : [Math.abs(this.value) % 1e7, Math.floor(Math.abs(this.value) / 1e7) % 1e7, Math.floor(Math.abs(this.value) / 1e14)], nt(Math.abs(e.value))), this.sign !== e.sign);
      };
      p.prototype._multiplyBySmall = function (e) {
        return e.value === 0 ? A[0] : e.value === 1 ? this : e.value === -1 ? this.negate() : Math.abs(e.value) < 1e7 ? new p(wt(this.value, Math.abs(e.value)), this.sign !== e.sign) : new p(Ut(this.value, nt(Math.abs(e.value))), this.sign !== e.sign);
      };
      b.prototype.multiply = function (e) {
        return (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e)._multiplyBySmall(this);
      };
      b.prototype.times = b.prototype.multiply;
      S.prototype.multiply = function (e) {
        return new S(this.value * (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e).value);
      };
      S.prototype.times = S.prototype.multiply;
      function Pt(e) {
        var r = e.length;
        var a = yt(r + r);
        var v;
        var d;
        var k;
        var _;
        var P;
        for (k = 0; k < r; k++) {
          _ = e[k];
          d = 0 - _ * _;
          for (var q = k; q < r; q++) {
            P = e[q];
            v = 2 * (_ * P) + a[k + q] + d;
            d = Math.floor(v / 1e7);
            a[k + q] = v - d * 1e7;
          }
          a[k + r] = d;
        }
        _t(a);
        return a;
      }
      p.prototype.square = function () {
        return new p(Pt(this.value), false);
      };
      b.prototype.square = function () {
        var e = this.value * this.value;
        return -9007199254740992 < e && e < 9007199254740992 ? new b(e) : new p(Pt(Math.abs(this.value) < 1e7 ? [Math.abs(this.value)] : Math.abs(this.value) < 1e14 ? [Math.abs(this.value) % 1e7, Math.floor(Math.abs(this.value) / 1e7)] : [Math.abs(this.value) % 1e7, Math.floor(Math.abs(this.value) / 1e7) % 1e7, Math.floor(Math.abs(this.value) / 1e14)]), false);
      };
      S.prototype.square = function (e) {
        return new S(this.value * this.value);
      };
      function Ct(e, r) {
        var a = e.length;
        var u = r.length;
        var d = yt(r.length);
        var k = r[u - 1];
        var _ = Math.ceil(1e7 / (2 * k));
        var P = wt(e, _);
        var q = wt(r, _);
        var W;
        var F;
        var j;
        var ht;
        var i;
        var h;
        var t;
        if (P.length <= a) {
          P.push(0);
        }
        q.push(0);
        k = q[u - 1];
        for (F = a - u; F >= 0; F--) {
          W = 9999999;
          if (P[F + u] !== k) {
            W = Math.floor((P[F + u] * 1e7 + P[F + u - 1]) / k);
          }
          j = 0;
          ht = 0;
          h = q.length;
          for (i = 0; i < h; i++) {
            j += W * q[i];
            t = Math.floor(j / 1e7);
            ht += P[F + i] - (j - t * 1e7);
            j = t;
            if (ht < 0) {
              P[F + i] = ht + 1e7;
              ht = -1;
            } else {
              P[F + i] = ht;
              ht = 0;
            }
          }
          for (; ht !== 0;) {
            W -= 1;
            j = 0;
            for (i = 0; i < h; i++) {
              j += P[F + i] - 1e7 + q[i];
              if (j < 0) {
                P[F + i] = j + 1e7;
                j = 0;
              } else {
                P[F + i] = j;
                j = 1;
              }
            }
            ht += j;
          }
          d[F] = W;
        }
        P = K(P, _)[0];
        return [ut(d), ut(P)];
      }
      function et(e, r) {
        var a = e.length;
        var u = r.length;
        var v = [];
        var d = [];
        var _;
        var P;
        var q;
        var W;
        for (var F; a;) {
          d.unshift(e[--a]);
          _t(d);
          if (dt(d, r) < 0) {
            v.push(0);
            continue;
          }
          P = d.length;
          q = d[P - 1] * 1e7 + d[P - 2];
          W = r[u - 1] * 1e7 + r[u - 2];
          if (P > u) {
            q = (q + 1) * 1e7;
          }
          _ = Math.ceil(q / W);
          do {
            F = wt(r, _);
            if (dt(F, d) <= 0) {
              break;
            }
            _--;
          } while (_);
          v.push(_);
          d = At(d, F);
        }
        v.reverse();
        return [ut(v), ut(d)];
      }
      function K(e, r) {
        var a = e.length;
        var u = yt(a);
        var d;
        var k;
        var _;
        var P;
        _ = 0;
        for (d = a - 1; d >= 0; --d) {
          P = _ * 1e7 + e[d];
          k = P / r > 0 ? Math.floor(P / r) : Math.ceil(P / r);
          _ = P - k * r;
          u[d] = k | 0;
        }
        return [u, _ | 0];
      }
      function tt(e, r) {
        var a;
        var u = typeof r == "number" ? pe(r) : typeof r == "string" ? he(r) : typeof r == "bigint" ? new S(r) : r;
        if (R) {
          return [new S(e.value / u.value), new S(e.value % u.value)];
        }
        var v = e.value;
        var d = u.value;
        var k;
        if (d === 0) {
          throw new Error("Cannot divide by zero");
        }
        if (e.isSmall) {
          return u.isSmall ? [new b(v / d > 0 ? Math.floor(v / d) : Math.ceil(v / d)), new b(v % d)] : [A[0], e];
        }
        if (u.isSmall) {
          if (d === 1) {
            return [e, A[0]];
          }
          if (d == -1) {
            return [e.negate(), A[0]];
          }
          var _ = Math.abs(d);
          if (_ < 1e7) {
            a = K(v, _);
            k = ut(a[0]);
            var P = a[1];
            if (e.sign) {
              P = -P;
            }
            return typeof k == "number" ? (e.sign !== u.sign && (k = -k), [new b(k), new b(P)]) : [new p(k, e.sign !== u.sign), new b(P)];
          }
          d = _ < 1e7 ? [_] : _ < 1e14 ? [_ % 1e7, Math.floor(_ / 1e7)] : [_ % 1e7, Math.floor(_ / 1e7) % 1e7, Math.floor(_ / 1e14)];
        }
        var q = dt(v, d);
        if (q === -1) {
          return [A[0], e];
        }
        if (q === 0) {
          return [A[e.sign === u.sign ? 1 : -1], A[0]];
        }
        if (v.length + d.length <= 200) {
          a = Ct(v, d);
        } else {
          a = et(v, d);
        }
        k = a[0];
        var W = e.sign !== u.sign;
        var F = a[1];
        var j = e.sign;
        if (typeof k == "number") {
          if (W) {
            k = -k;
          }
          k = new b(k);
        } else {
          k = new p(k, W);
        }
        if (typeof F == "number") {
          if (j) {
            F = -F;
          }
          F = new b(F);
        } else {
          F = new p(F, j);
        }
        return [k, F];
      }
      p.prototype.divmod = function (e) {
        var r = tt(this, e);
        return {
          quotient: r[0],
          remainder: r[1]
        };
      };
      S.prototype.divmod = b.prototype.divmod = p.prototype.divmod;
      p.prototype.divide = function (e) {
        return tt(this, e)[0];
      };
      S.prototype.over = S.prototype.divide = function (e) {
        return new S(this.value / (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e).value);
      };
      b.prototype.over = b.prototype.divide = p.prototype.over = p.prototype.divide;
      p.prototype.mod = function (e) {
        return tt(this, e)[1];
      };
      S.prototype.mod = S.prototype.remainder = function (e) {
        return new S(this.value % (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e).value);
      };
      b.prototype.remainder = b.prototype.mod = p.prototype.remainder = p.prototype.mod;
      p.prototype.pow = function (e) {
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        var a = this.value;
        var u = r.value;
        var v;
        var d;
        var k;
        if (u === 0) {
          return A[1];
        }
        if (a === 0) {
          return A[0];
        }
        if (a === 1) {
          return A[1];
        }
        if (a === -1) {
          return r.isEven() ? A[1] : A[-1];
        }
        if (r.sign) {
          return A[0];
        }
        if (!r.isSmall) {
          throw new Error("The exponent " + r.toString() + " is too large.");
        }
        if (this.isSmall && -9007199254740992 < (v = Math.pow(a, u)) && (v = Math.pow(a, u)) < 9007199254740992) {
          return new b(v > 0 ? Math.floor(v) : Math.ceil(v));
        }
        d = this;
        for (k = A[1]; u & true && (k = k.times(d), --u), u !== 0;) {
          u /= 2;
          d = d.square();
        }
        return k;
      };
      b.prototype.pow = p.prototype.pow;
      S.prototype.pow = function (e) {
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        var a = this.value;
        var u = r.value;
        var v = BigInt(0);
        var d = BigInt(1);
        var k = BigInt(2);
        if (u === v) {
          return A[1];
        }
        if (a === v) {
          return A[0];
        }
        if (a === d) {
          return A[1];
        }
        if (a === BigInt(-1)) {
          return r.isEven() ? A[1] : A[-1];
        }
        if (r.isNegative()) {
          return new S(v);
        }
        var _ = this;
        for (var P = A[1]; (u & d) === d && (P = P.times(_), --u), u !== v;) {
          u /= k;
          _ = _.square();
        }
        return P;
      };
      p.prototype.modPow = function (e, r) {
        e = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        r = typeof r == "number" ? pe(r) : typeof r == "string" ? he(r) : typeof r == "bigint" ? new S(r) : r;
        if (r.isZero()) {
          throw new Error("Cannot take modPow with modulus 0");
        }
        var a = A[1];
        var u = this.mod(r);
        for (e.isNegative() && (e = e.multiply(A[-1]), u = u.modInv(r)); e.isPositive();) {
          if (u.isZero()) {
            return A[0];
          }
          if (e.isOdd()) {
            a = a.multiply(u).mod(r);
          }
          e = e.divide(2);
          u = u.square().mod(r);
        }
        return a;
      };
      S.prototype.modPow = b.prototype.modPow = p.prototype.modPow;
      function dt(e, r) {
        if (e.length !== r.length) {
          return e.length > r.length ? 1 : -1;
        }
        for (var a = e.length - 1; a >= 0; a--) {
          if (e[a] !== r[a]) {
            return e[a] > r[a] ? 1 : -1;
          }
        }
        return 0;
      }
      p.prototype.compareAbs = function (e) {
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        var a = this.value;
        var u = r.value;
        return r.isSmall ? 1 : dt(a, u);
      };
      b.prototype.compareAbs = function (e) {
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        var a = Math.abs(this.value);
        var u = r.value;
        return r.isSmall ? (u = Math.abs(u), a === u ? 0 : a > u ? 1 : -1) : -1;
      };
      S.prototype.compareAbs = function (e) {
        var r = this.value;
        var a = (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e).value;
        r = r >= 0 ? r : -r;
        a = a >= 0 ? a : -a;
        return r === a ? 0 : r > a ? 1 : -1;
      };
      p.prototype.compare = function (e) {
        if (e === Infinity) {
          return -1;
        }
        if (e === -Infinity) {
          return 1;
        }
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        var a = this.value;
        var u = r.value;
        return this.sign !== r.sign ? r.sign ? 1 : -1 : r.isSmall ? this.sign ? -1 : 1 : dt(a, u) * (this.sign ? -1 : 1);
      };
      p.prototype.compareTo = p.prototype.compare;
      b.prototype.compare = function (e) {
        if (e === Infinity) {
          return -1;
        }
        if (e === -Infinity) {
          return 1;
        }
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        var a = this.value;
        var u = r.value;
        return r.isSmall ? a == u ? 0 : a > u ? 1 : -1 : a < 0 !== r.sign ? a < 0 ? -1 : 1 : a < 0 ? 1 : -1;
      };
      b.prototype.compareTo = b.prototype.compare;
      S.prototype.compare = function (e) {
        if (e === Infinity) {
          return -1;
        }
        if (e === -Infinity) {
          return 1;
        }
        var r = this.value;
        var a = (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e).value;
        return r === a ? 0 : r > a ? 1 : -1;
      };
      S.prototype.compareTo = S.prototype.compare;
      p.prototype.equals = function (e) {
        return this.compare(e) === 0;
      };
      S.prototype.eq = S.prototype.equals = b.prototype.eq = b.prototype.equals = p.prototype.eq = p.prototype.equals;
      p.prototype.notEquals = function (e) {
        return this.compare(e) !== 0;
      };
      S.prototype.neq = S.prototype.notEquals = b.prototype.neq = b.prototype.notEquals = p.prototype.neq = p.prototype.notEquals;
      p.prototype.greater = function (e) {
        return this.compare(e) > 0;
      };
      S.prototype.gt = S.prototype.greater = b.prototype.gt = b.prototype.greater = p.prototype.gt = p.prototype.greater;
      p.prototype.lesser = function (e) {
        return this.compare(e) < 0;
      };
      S.prototype.lt = S.prototype.lesser = b.prototype.lt = b.prototype.lesser = p.prototype.lt = p.prototype.lesser;
      p.prototype.greaterOrEquals = function (e) {
        return this.compare(e) >= 0;
      };
      S.prototype.geq = S.prototype.greaterOrEquals = b.prototype.geq = b.prototype.greaterOrEquals = p.prototype.geq = p.prototype.greaterOrEquals;
      p.prototype.lesserOrEquals = function (e) {
        return this.compare(e) <= 0;
      };
      S.prototype.leq = S.prototype.lesserOrEquals = b.prototype.leq = b.prototype.lesserOrEquals = p.prototype.leq = p.prototype.lesserOrEquals;
      p.prototype.isEven = function () {
        return (this.value[0] & 1) === 0;
      };
      b.prototype.isEven = function () {
        return (this.value & 1) === 0;
      };
      S.prototype.isEven = function () {
        return (this.value & BigInt(1)) === BigInt(0);
      };
      p.prototype.isOdd = function () {
        return (this.value[0] & 1) === 1;
      };
      b.prototype.isOdd = function () {
        return (this.value & 1) === 1;
      };
      S.prototype.isOdd = function () {
        return (this.value & BigInt(1)) === BigInt(1);
      };
      p.prototype.isPositive = function () {
        return !this.sign;
      };
      b.prototype.isPositive = function () {
        return this.value > 0;
      };
      S.prototype.isPositive = b.prototype.isPositive;
      p.prototype.isNegative = function () {
        return this.sign;
      };
      b.prototype.isNegative = function () {
        return this.value < 0;
      };
      S.prototype.isNegative = b.prototype.isNegative;
      p.prototype.isUnit = function () {
        return false;
      };
      b.prototype.isUnit = function () {
        return Math.abs(this.value) === 1;
      };
      S.prototype.isUnit = function () {
        return this.abs().value === BigInt(1);
      };
      p.prototype.isZero = function () {
        return false;
      };
      b.prototype.isZero = function () {
        return this.value === 0;
      };
      S.prototype.isZero = function () {
        return this.value === BigInt(0);
      };
      p.prototype.isDivisibleBy = function (e) {
        var r = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        return r.isZero() ? false : r.isUnit() ? true : r.compareAbs(2) === 0 ? this.isEven() : this.mod(r).isZero();
      };
      S.prototype.isDivisibleBy = b.prototype.isDivisibleBy = p.prototype.isDivisibleBy;
      function ct(e) {
        var r = e.abs();
        if (r.isUnit()) {
          return false;
        }
        if (r.equals(2) || r.equals(3) || r.equals(5)) {
          return true;
        }
        if (r.isEven() || r.isDivisibleBy(3) || r.isDivisibleBy(5)) {
          return false;
        }
        if (r.lesser(49)) {
          return true;
        }
      }
      function Wt(e, r) {
        var a = e.prev();
        var u = a;
        var v = 0;
        var d;
        var k;
        for (var _; u.isEven();) {
          u = u.divide(2);
          v++;
        }
        t: for (k = 0; k < r.length; k++) {
          if (!e.lesser(r[k]) && (_ = n(r[k]).modPow(u, e), !(_.isUnit() || _.equals(a)))) {
            for (d = v - 1; d != 0; d--) {
              _ = _.square().mod(e);
              if (_.isUnit()) {
                return false;
              }
              if (_.equals(a)) {
                continue t;
              }
            }
            return false;
          }
        }
        return true;
      }
      p.prototype.isPrime = function (e) {
        var r = ct(this);
        if (r !== o) {
          return r;
        }
        var a = this.abs();
        var u = a.bitLength();
        if (u <= 64) {
          return Wt(a, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
        }
        var v = Math.log(2) * u.toJSNumber();
        var d = Math.ceil(e === true ? 2 * Math.pow(v, 2) : v);
        var k = [];
        for (var _ = 0; _ < d; _++) {
          k.push(n(_ + 2));
        }
        return Wt(a, k);
      };
      S.prototype.isPrime = b.prototype.isPrime = p.prototype.isPrime;
      p.prototype.isProbablePrime = function (e, r) {
        var a = ct(this);
        if (a !== o) {
          return a;
        }
        var u = this.abs();
        var v = e === o ? 5 : e;
        var d = [];
        for (var k = 0; k < v; k++) {
          d.push(n.randBetween(2, u.minus(2), r));
        }
        return Wt(u, d);
      };
      S.prototype.isProbablePrime = b.prototype.isProbablePrime = p.prototype.isProbablePrime;
      p.prototype.modInv = function (e) {
        var r = n.zero;
        var a = n.one;
        var u = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        var v = this.abs();
        var d;
        var k;
        for (var _; !v.isZero();) {
          d = u.divide(v);
          k = r;
          _ = u;
          r = a;
          u = v;
          a = k.subtract(d.multiply(a));
          v = _.subtract(d.multiply(v));
        }
        if (!u.isUnit()) {
          throw new Error(this.toString() + " and " + e.toString() + " are not co-prime");
        }
        if (r.compare(0) === -1) {
          r = r.add(e);
        }
        return this.isNegative() ? r.negate() : r;
      };
      S.prototype.modInv = b.prototype.modInv = p.prototype.modInv;
      p.prototype.next = function () {
        var e = this.value;
        return this.sign ? Mt(e, 1, this.sign) : new p(ot(e, 1), this.sign);
      };
      b.prototype.next = function () {
        var e = this.value;
        return e + 1 < 9007199254740992 ? new b(e + 1) : new p(y, false);
      };
      S.prototype.next = function () {
        return new S(this.value + BigInt(1));
      };
      p.prototype.prev = function () {
        var e = this.value;
        return this.sign ? new p(ot(e, 1), true) : Mt(e, 1, this.sign);
      };
      b.prototype.prev = function () {
        var e = this.value;
        return e - 1 > -9007199254740992 ? new b(e - 1) : new p(y, true);
      };
      S.prototype.prev = function () {
        return new S(this.value - BigInt(1));
      };
      for (var mt = [1]; 2 * mt[mt.length - 1] <= 1e7;) {
        mt.push(2 * mt[mt.length - 1]);
      }
      var Lt = mt.length;
      var Et = mt[Lt - 1];
      function Gt(e) {
        return Math.abs(e) <= 1e7;
      }
      p.prototype.shiftLeft = function (e) {
        var r = (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e).toJSNumber();
        if (!(Math.abs(r) <= 1e7)) {
          throw new Error(String(r) + " is too large for shifting.");
        }
        if (r < 0) {
          return this.shiftRight(-r);
        }
        var a = this;
        if (a.isZero()) {
          return a;
        }
        for (; r >= Lt;) {
          a = a.multiply(Et);
          r -= Lt - 1;
        }
        return a.multiply(mt[r]);
      };
      S.prototype.shiftLeft = b.prototype.shiftLeft = p.prototype.shiftLeft;
      p.prototype.shiftRight = function (e) {
        var r;
        var a = (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e).toJSNumber();
        if (!(Math.abs(a) <= 1e7)) {
          throw new Error(String(a) + " is too large for shifting.");
        }
        if (a < 0) {
          return this.shiftLeft(-a);
        }
        for (var u = this; a >= Lt;) {
          if (u.isZero() || u.isNegative() && u.isUnit()) {
            return u;
          }
          r = tt(u, Et);
          u = r[1].isNegative() ? r[0].prev() : r[0];
          a -= Lt - 1;
        }
        r = tt(u, mt[a]);
        return r[1].isNegative() ? r[0].prev() : r[0];
      };
      S.prototype.shiftRight = b.prototype.shiftRight = p.prototype.shiftRight;
      function qt(e, r, a) {
        r = typeof r == "number" ? pe(r) : typeof r == "string" ? he(r) : typeof r == "bigint" ? new S(r) : r;
        var u = e.isNegative();
        var v = r.isNegative();
        var d = u ? e.not() : e;
        var k = v ? r.not() : r;
        var _ = 0;
        var P = 0;
        var q = null;
        var W = null;
        for (var F = []; !d.isZero() || !k.isZero();) {
          q = tt(d, Et);
          _ = q[1].toJSNumber();
          if (u) {
            _ = Et - 1 - _;
          }
          W = tt(k, Et);
          P = W[1].toJSNumber();
          if (v) {
            P = Et - 1 - P;
          }
          d = q[0];
          k = W[0];
          F.push(a(_, P));
        }
        var j = a(u ? 1 : 0, v ? 1 : 0) !== 0 ? n(-1) : n(0);
        for (var ht = F.length - 1; ht >= 0; ht -= 1) {
          j = j.multiply(Et).add(n(F[ht]));
        }
        return j;
      }
      p.prototype.not = function () {
        return this.negate().prev();
      };
      S.prototype.not = b.prototype.not = p.prototype.not;
      p.prototype.and = function (e) {
        return qt(this, e, function (r, a) {
          return r & a;
        });
      };
      S.prototype.and = b.prototype.and = p.prototype.and;
      p.prototype.or = function (e) {
        return qt(this, e, function (r, a) {
          return r | a;
        });
      };
      S.prototype.or = b.prototype.or = p.prototype.or;
      p.prototype.xor = function (e) {
        return qt(this, e, function (r, a) {
          return r ^ a;
        });
      };
      S.prototype.xor = b.prototype.xor = p.prototype.xor;
      var Jt = 1073741824;
      var Ae = 16384 | Jt;
      function Zt(e) {
        var r = e.value;
        var a = typeof r == "number" ? r | Jt : typeof r == "bigint" ? r | BigInt(Jt) : r[0] + r[1] * 1e7 | Ae;
        return a & -a;
      }
      function bt(e, r) {
        if (r.compareTo(e) <= 0) {
          var a = bt(e, r.square(r));
          var u = a.p;
          var v = a.e;
          var d = u.multiply(r);
          return d.compareTo(e) <= 0 ? {
            p: d,
            e: v * 2 + 1
          } : {
            p: u,
            e: v * 2
          };
        }
        return {
          p: n(1),
          e: 0
        };
      }
      p.prototype.bitLength = function () {
        var e = this;
        if (e.compareTo(n(0)) < 0) {
          e = e.negate().subtract(n(1));
        }
        return e.compareTo(n(0)) === 0 ? n(0) : n(bt(e, n(2)).e).add(n(1));
      };
      S.prototype.bitLength = b.prototype.bitLength = p.prototype.bitLength;
      function ae(e, r) {
        e = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        r = typeof r == "number" ? pe(r) : typeof r == "string" ? he(r) : typeof r == "bigint" ? new S(r) : r;
        return e.greater(r) ? e : r;
      }
      function $t(e, r) {
        e = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        r = typeof r == "number" ? pe(r) : typeof r == "string" ? he(r) : typeof r == "bigint" ? new S(r) : r;
        return e.lesser(r) ? e : r;
      }
      function fe(e, r) {
        e = (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e).abs();
        r = (typeof r == "number" ? pe(r) : typeof r == "string" ? he(r) : typeof r == "bigint" ? new S(r) : r).abs();
        if (e.equals(r)) {
          return e;
        }
        if (e.isZero()) {
          return r;
        }
        if (r.isZero()) {
          return e;
        }
        var a = A[1];
        var u;
        for (var v; e.isEven() && r.isEven();) {
          u = $t(Zt(e), Zt(r));
          e = e.divide(u);
          r = r.divide(u);
          a = a.multiply(u);
        }
        for (; e.isEven();) {
          e = e.divide(Zt(e));
        }
        do {
          for (; r.isEven();) {
            r = r.divide(Zt(r));
          }
          if (e.greater(r)) {
            v = r;
            r = e;
            e = v;
          }
          r = r.subtract(e);
        } while (!r.isZero());
        return a.isUnit() ? e : e.multiply(a);
      }
      function le(e, r) {
        e = (typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e).abs();
        r = (typeof r == "number" ? pe(r) : typeof r == "string" ? he(r) : typeof r == "bigint" ? new S(r) : r).abs();
        return e.divide(fe(e, r)).multiply(r);
      }
      function Dt(e, r, a) {
        e = typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
        r = typeof r == "number" ? pe(r) : typeof r == "string" ? he(r) : typeof r == "bigint" ? new S(r) : r;
        var u = a || Math.random;
        var v = $t(e, r);
        var d = ae(e, r);
        var k = d.subtract(v).add(1);
        if (k.isSmall) {
          return v.add(Math.floor(u() * k));
        }
        var _ = xt(k, 1e7).value;
        var P = [];
        var q = true;
        for (var W = 0; W < _.length; W++) {
          var F = q ? _[W] + (W + 1 < _.length ? _[W + 1] / 1e7 : 0) : 1e7;
          var j = u() * F > 0 ? Math.floor(u() * F) : Math.ceil(u() * F);
          P.push(j);
          if (j < _[W]) {
            q = false;
          }
        }
        return v.add(A.fromArray(P, 1e7, false));
      }
      var Se = function (e, r, a, u) {
        a = a || "0123456789abcdefghijklmnopqrstuvwxyz";
        e = String(e);
        if (!u) {
          e = e.toLowerCase();
          a = a.toLowerCase();
        }
        var v = e.length;
        var d;
        var k = Math.abs(r);
        var _ = {};
        for (d = 0; d < a.length; d++) {
          _[a[d]] = d;
        }
        for (d = 0; d < v; d++) {
          var P = e[d];
          if (P !== "-" && P in _ && _[P] >= k) {
            if (P === "1" && k === 1) {
              continue;
            }
            throw new Error(P + " is not a valid digit in base " + r + ".");
          }
        }
        r = typeof r == "number" ? pe(r) : typeof r == "string" ? he(r) : typeof r == "bigint" ? new S(r) : r;
        var q = [];
        var W = e[0] === "-";
        for (d = W ? 1 : 0; d < e.length; d++) {
          var P = e[d];
          if (P in _) {
            q.push(typeof _[P] == "number" ? pe(_[P]) : typeof _[P] == "string" ? he(_[P]) : typeof _[P] == "bigint" ? new S(_[P]) : _[P]);
          } else if (P === "<") {
            var F = d;
            do {
              d++;
            } while (e[d] !== ">" && d < e.length);
            q.push(typeof e.slice(F + 1, d) == "number" ? pe(e.slice(F + 1, d)) : typeof e.slice(F + 1, d) == "string" ? he(e.slice(F + 1, d)) : typeof e.slice(F + 1, d) == "bigint" ? new S(e.slice(F + 1, d)) : e.slice(F + 1, d));
          } else {
            throw new Error(P + " is not a valid character");
          }
        }
        return ue(q, r, W);
      };
      function ue(e, r, a) {
        var u = A[0];
        var v = A[1];
        var d;
        for (d = e.length - 1; d >= 0; d--) {
          u = u.add(e[d].times(v));
          v = v.times(r);
        }
        return a ? u.negate() : u;
      }
      function Ee(e, r) {
        r = r || "0123456789abcdefghijklmnopqrstuvwxyz";
        return e < r.length ? r[e] : "<" + e + ">";
      }
      function xt(e, r) {
        r = n(r);
        if (r.isZero()) {
          if (e.isZero()) {
            return {
              value: [0],
              isNegative: false
            };
          }
          throw new Error("Cannot convert nonzero numbers to base 0.");
        }
        if (r.equals(-1)) {
          if (e.isZero()) {
            return {
              value: [0],
              isNegative: false
            };
          }
          if (e.isNegative()) {
            return {
              value: [].concat.apply([], Array.apply(null, Array(-e.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: false
            };
          }
          var a = Array.apply(null, Array(e.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
          a.unshift([1]);
          return {
            value: [].concat.apply([], a),
            isNegative: false
          };
        }
        var u = false;
        if (e.isNegative() && r.isPositive()) {
          u = true;
          e = e.abs();
        }
        if (r.isUnit()) {
          return e.isZero() ? {
            value: [0],
            isNegative: false
          } : {
            value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: u
          };
        }
        var v = [];
        var d = e;
        for (var k; d.isNegative() || d.compareAbs(r) >= 0;) {
          k = d.divmod(r);
          d = k.quotient;
          var _ = k.remainder;
          if (_.isNegative()) {
            _ = r.minus(_).abs();
            d = d.next();
          }
          v.push(_.toJSNumber());
        }
        v.push(d.toJSNumber());
        return {
          value: v.reverse(),
          isNegative: u
        };
      }
      function ce(e, r, a) {
        var u = xt(e, r);
        return (u.isNegative ? "-" : "") + u.value.map(function (v) {
          return Ee(v, a);
        }).join("");
      }
      p.prototype.toArray = function (e) {
        return xt(this, e);
      };
      b.prototype.toArray = function (e) {
        return xt(this, e);
      };
      S.prototype.toArray = function (e) {
        return xt(this, e);
      };
      p.prototype.toString = function (e, r) {
        if (e === o) {
          e = 10;
        }
        if (e !== 10 || r) {
          return ce(this, e, r);
        }
        var a = this.value;
        var u = a.length;
        var v = String(a[--u]);
        for (var k; --u >= 0;) {
          k = String(a[u]);
          v += "0000000".slice(k.length) + k;
        }
        var _ = this.sign ? "-" : "";
        return _ + v;
      };
      b.prototype.toString = function (e, r) {
        if (e === o) {
          e = 10;
        }
        return e != 10 || r ? ce(this, e, r) : String(this.value);
      };
      S.prototype.toString = b.prototype.toString;
      S.prototype.toJSON = p.prototype.toJSON = b.prototype.toJSON = function () {
        return this.toString();
      };
      p.prototype.valueOf = function () {
        return parseInt(this.toString(), 10);
      };
      p.prototype.toJSNumber = p.prototype.valueOf;
      b.prototype.valueOf = function () {
        return this.value;
      };
      b.prototype.toJSNumber = b.prototype.valueOf;
      S.prototype.valueOf = S.prototype.toJSNumber = function () {
        return parseInt(this.toString(), 10);
      };
      function he(e) {
        if (-9007199254740992 < +e && +e < 9007199254740992) {
          var r = +e;
          if (r === (r > 0 ? Math.floor(r) : Math.ceil(r))) {
            return R ? new S(BigInt(r)) : new b(r);
          }
          throw new Error("Invalid integer: " + e);
        }
        var a = e[0] === "-";
        if (a) {
          e = e.slice(1);
        }
        var u = e.split(/e/i);
        if (u.length > 2) {
          throw new Error("Invalid integer: " + u.join("e"));
        }
        if (u.length === 2) {
          var v = u[1];
          if (v[0] === "+") {
            v = v.slice(1);
          }
          v = +v;
          if (v !== (v > 0 ? Math.floor(v) : Math.ceil(v)) || !(-9007199254740992 < v && v < 9007199254740992)) {
            throw new Error("Invalid integer: " + v + " is not a valid exponent.");
          }
          var d = u[0];
          var k = d.indexOf(".");
          if (k >= 0) {
            v -= d.length - k - 1;
            d = d.slice(0, k) + d.slice(k + 1);
          }
          if (v < 0) {
            throw new Error("Cannot include negative exponent part for integers");
          }
          d += new Array(v + 1).join("0");
          e = d;
        }
        var _ = /^([0-9][0-9]*)$/.test(e);
        if (!_) {
          throw new Error("Invalid integer: " + e);
        }
        if (R) {
          return new S(BigInt(a ? "-" + e : e));
        }
        var P = [];
        var q = e.length;
        for (var F = q - 7; q > 0;) {
          P.push(+e.slice(F, q));
          F -= 7;
          if (F < 0) {
            F = 0;
          }
          q -= 7;
        }
        _t(P);
        return new p(P, a);
      }
      function pe(e) {
        if (R) {
          return new S(BigInt(e));
        }
        if (-9007199254740992 < e && e < 9007199254740992) {
          if (e !== (e > 0 ? Math.floor(e) : Math.ceil(e))) {
            throw new Error(e + " is not an integer.");
          }
          return new b(e);
        }
        return he(e.toString());
      }
      function C(e) {
        return typeof e == "number" ? pe(e) : typeof e == "string" ? he(e) : typeof e == "bigint" ? new S(e) : e;
      }
      for (var It = 0; It < 1e3; It++) {
        A[It] = typeof It == "number" ? pe(It) : typeof It == "string" ? he(It) : typeof It == "bigint" ? new S(It) : It;
        if (It > 0) {
          A[-It] = typeof -It == "number" ? pe(-It) : typeof -It == "string" ? he(-It) : typeof -It == "bigint" ? new S(-It) : -It;
        }
      }
      A.one = A[1];
      A.zero = A[0];
      A.minusOne = A[-1];
      A.max = ae;
      A.min = $t;
      A.gcd = fe;
      A.lcm = le;
      A.isInstance = function (e) {
        return e instanceof p || e instanceof b || e instanceof S;
      };
      A.randBetween = Dt;
      A.fromArray = function (e, r, a) {
        return ue(e.map(C), typeof (r || 10) == "number" ? pe(r || 10) : typeof (r || 10) == "string" ? he(r || 10) : typeof (r || 10) == "bigint" ? new S(r || 10) : r || 10, a);
      };
      return A;
    }();
    if (f.hasOwnProperty("exports")) {
      f.exports = n;
    }
  })(Ke);
  var tr = Ke.exports;
  var Y = tr && tr.__esModule && Object.prototype.hasOwnProperty.call(tr, "default") ? tr.default : tr;
  Y(Number.MAX_SAFE_INTEGER);
  const ze = Y(Y[2]).pow(64);
  const er = ze.divide(Y[2]);
  function gt(f, n = 256) {
    return Y.fromArray(f instanceof Uint8Array ? [...f] : f, n);
  }
  function Rt(f) {
    return new Uint8Array(f.toArray(256).value);
  }
  function rr(f) {
    return f.greater(er) ? f.minus(ze) : f;
  }
  function He(f, n, o) {
    const s = gt(f);
    const l = gt(n);
    const c = gt(o);
    const y = s.modPow(l, c);
    return new Uint8Array(y.toArray(256).value);
  }
  var Ie = {
    exports: {}
  }; /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
  (function (f, n) {
    (function (o, s) {
      s(n);
    })($e, function (o) {
      var s = (i, h, t, E) => {
        let B = 65535 & i | 0;
        let m = i >>> 16 & 65535 | 0;
        let U = 0;
        for (; t !== 0;) {
          U = t > 2e3 ? 2e3 : t;
          t -= U;
          do {
            B = B + h[E++] | 0;
            m = m + B | 0;
          } while (--U);
          B %= 65521;
          m %= 65521;
        }
        return B | m << 16 | 0;
      };
      const l = new Uint32Array((() => {
        let i;
        let h = [];
        for (var t = 0; t < 256; t++) {
          i = t;
          for (var E = 0; E < 8; E++) {
            i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
          }
          h[t] = i;
        }
        return h;
      })());
      var c = (i, h, t, E) => {
        const m = E + t;
        i ^= -1;
        for (let U = E; U < m; U++) {
          i = i >>> 8 ^ l[255 & (i ^ h[U])];
        }
        return -1 ^ i;
      };
      var T = function (i, h) {
        let t;
        let E;
        let B;
        let m;
        let U;
        let x;
        let V;
        let g;
        let w;
        let ft;
        let Z;
        let I;
        let lt;
        let X;
        let N;
        let $;
        let H;
        let M;
        let J;
        let rt;
        let L;
        let Q;
        let z;
        let D;
        const G = i.state;
        t = i.next_in;
        z = i.input;
        E = t + (i.avail_in - 5);
        B = i.next_out;
        D = i.output;
        m = B - (h - i.avail_out);
        U = B + (i.avail_out - 257);
        x = G.dmax;
        V = G.wsize;
        g = G.whave;
        w = G.wnext;
        ft = G.window;
        Z = G.hold;
        I = G.bits;
        lt = G.lencode;
        X = G.distcode;
        N = (1 << G.lenbits) - 1;
        $ = (1 << G.distbits) - 1;
        t: do {
          if (I < 15) {
            Z += z[t++] << I;
            I += 8;
            Z += z[t++] << I;
            I += 8;
          }
          H = lt[Z & N];
          e: for (;;) {
            M = H >>> 24;
            Z >>>= M;
            I -= M;
            M = H >>> 16 & 255;
            if (M === 0) {
              D[B++] = 65535 & H;
            } else {
              if (!(16 & M)) {
                if (!(64 & M)) {
                  H = lt[(65535 & H) + (Z & (1 << M) - 1)];
                  continue e;
                }
                if (32 & M) {
                  G.mode = 16191;
                  break t;
                }
                i.msg = "invalid literal/length code";
                G.mode = 16209;
                break t;
              }
              J = 65535 & H;
              M &= 15;
              if (M) {
                if (I < M) {
                  Z += z[t++] << I;
                  I += 8;
                }
                J += Z & (1 << M) - 1;
                Z >>>= M;
                I -= M;
              }
              if (I < 15) {
                Z += z[t++] << I;
                I += 8;
                Z += z[t++] << I;
                I += 8;
              }
              H = X[Z & $];
              r: for (;;) {
                M = H >>> 24;
                Z >>>= M;
                I -= M;
                M = H >>> 16 & 255;
                if (!(16 & M)) {
                  if (!(64 & M)) {
                    H = X[(65535 & H) + (Z & (1 << M) - 1)];
                    continue r;
                  }
                  i.msg = "invalid distance code";
                  G.mode = 16209;
                  break t;
                }
                rt = 65535 & H;
                M &= 15;
                if (I < M) {
                  Z += z[t++] << I;
                  I += 8;
                  if (I < M) {
                    Z += z[t++] << I;
                    I += 8;
                  }
                }
                rt += Z & (1 << M) - 1;
                if (rt > x) {
                  i.msg = "invalid distance too far back";
                  G.mode = 16209;
                  break t;
                }
                Z >>>= M;
                I -= M;
                M = B - m;
                if (rt > M) {
                  M = rt - M;
                  if (M > g && G.sane) {
                    i.msg = "invalid distance too far back";
                    G.mode = 16209;
                    break t;
                  }
                  L = 0;
                  Q = ft;
                  if (w === 0) {
                    L += V - M;
                    if (M < J) {
                      J -= M;
                      do {
                        D[B++] = ft[L++];
                      } while (--M);
                      L = B - rt;
                      Q = D;
                    }
                  } else if (w < M) {
                    L += V + w - M;
                    M -= w;
                    if (M < J) {
                      J -= M;
                      do {
                        D[B++] = ft[L++];
                      } while (--M);
                      L = 0;
                      if (w < J) {
                        M = w;
                        J -= M;
                        do {
                          D[B++] = ft[L++];
                        } while (--M);
                        L = B - rt;
                        Q = D;
                      }
                    }
                  } else {
                    L += w - M;
                    if (M < J) {
                      J -= M;
                      do {
                        D[B++] = ft[L++];
                      } while (--M);
                      L = B - rt;
                      Q = D;
                    }
                  }
                  for (; J > 2;) {
                    D[B++] = Q[L++];
                    D[B++] = Q[L++];
                    D[B++] = Q[L++];
                    J -= 3;
                  }
                  if (J) {
                    D[B++] = Q[L++];
                    if (J > 1) {
                      D[B++] = Q[L++];
                    }
                  }
                } else {
                  L = B - rt;
                  do {
                    D[B++] = D[L++];
                    D[B++] = D[L++];
                    D[B++] = D[L++];
                    J -= 3;
                  } while (J > 2);
                  if (J) {
                    D[B++] = D[L++];
                    if (J > 1) {
                      D[B++] = D[L++];
                    }
                  }
                }
                break;
              }
            }
            break;
          }
        } while (t < E && B < U);
        J = I >> 3;
        t -= J;
        I -= J << 3;
        Z &= (1 << I) - 1;
        i.next_in = t;
        i.next_out = B;
        i.avail_in = t < E ? E - t + 5 : 5 - (t - E);
        i.avail_out = B < U ? U - B + 257 : 257 - (B - U);
        G.hold = Z;
        G.bits = I;
      };
      const A = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
      const p = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
      const b = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
      const S = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
      var O = (i, h, t, E, B, m, U, x) => {
        const V = x.bits;
        let g;
        let w;
        let ft;
        let Z;
        let I;
        let lt;
        let X = 0;
        let N = 0;
        let $ = 0;
        let H = 0;
        let M = 0;
        let J = 0;
        let rt = 0;
        let L = 0;
        let Q = 0;
        let z = 0;
        let D = null;
        const G = new Uint16Array(16);
        const pt = new Uint16Array(16);
        let te;
        let de;
        let ve;
        let ge = null;
        for (X = 0; X <= 15; X++) {
          G[X] = 0;
        }
        for (N = 0; N < E; N++) {
          G[h[t + N]]++;
        }
        M = V;
        for (H = 15; H >= 1 && G[H] === 0; H--) {
          ;
        }
        if (M > H) {
          M = H;
        }
        if (H === 0) {
          B[m++] = 20971520;
          B[m++] = 20971520;
          x.bits = 1;
          return 0;
        }
        for ($ = 1; $ < H && G[$] === 0; $++) {
          ;
        }
        if (M < $) {
          M = $;
        }
        L = 1;
        for (X = 1; X <= 15; X++) {
          L <<= 1;
          L -= G[X];
          if (L < 0) {
            return -1;
          }
        }
        if (L > 0 && (i === 0 || H !== 1)) {
          return -1;
        }
        pt[1] = 0;
        for (X = 1; X < 15; X++) {
          pt[X + 1] = pt[X] + G[X];
        }
        for (N = 0; N < E; N++) {
          if (h[t + N] !== 0) {
            U[pt[h[t + N]]++] = N;
          }
        }
        if (i === 0) {
          D = ge = U;
          lt = 20;
        } else if (i === 1) {
          D = A;
          ge = p;
          lt = 257;
        } else {
          D = b;
          ge = S;
          lt = 0;
        }
        z = 0;
        N = 0;
        X = $;
        I = m;
        J = M;
        rt = 0;
        ft = -1;
        Q = 1 << M;
        Z = Q - 1;
        if (i === 1 && Q > 852 || i === 2 && Q > 592) {
          return 1;
        }
        for (;;) {
          te = X - rt;
          if (U[N] + 1 < lt) {
            de = 0;
            ve = U[N];
          } else if (U[N] >= lt) {
            de = ge[U[N] - lt];
            ve = D[U[N] - lt];
          } else {
            de = 96;
            ve = 0;
          }
          g = 1 << X - rt;
          w = 1 << J;
          $ = w;
          do {
            w -= g;
            B[I + (z >> rt) + w] = te << 24 | de << 16 | ve | 0;
          } while (w !== 0);
          for (g = 1 << X - 1; z & g;) {
            g >>= 1;
          }
          if (g !== 0) {
            z &= g - 1;
            z += g;
          } else {
            z = 0;
          }
          N++;
          if (--G[X] == 0) {
            if (X === H) {
              break;
            }
            X = h[t + U[N]];
          }
          if (X > M && (z & Z) !== ft) {
            if (rt === 0) {
              rt = M;
            }
            I += $;
            J = X - rt;
            for (L = 1 << J; J + rt < H && (L -= G[J + rt], !(L <= 0));) {
              J++;
              L <<= 1;
            }
            Q += 1 << J;
            if (i === 1 && Q > 852 || i === 2 && Q > 592) {
              return 1;
            }
            ft = z & Z;
            B[ft] = M << 24 | J << 16 | I - m | 0;
          }
        }
        if (z !== 0) {
          B[I + z] = X - rt << 24 | 4194304 | 0;
        }
        x.bits = M;
        return 0;
      };
      var nt = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
      };
      const {
        Z_FINISH: ut,
        Z_BLOCK: _t,
        Z_TREES: yt,
        Z_OK: at,
        Z_STREAM_END: Ht,
        Z_NEED_DICT: Tt,
        Z_STREAM_ERROR: ot,
        Z_DATA_ERROR: At,
        Z_MEM_ERROR: St,
        Z_BUF_ERROR: Mt,
        Z_DEFLATED: Ut
      } = nt;
      const tt = i => (i >>> 24 & 255) + (i >>> 8 & 65280) + ((65280 & i) << 8) + ((255 & i) << 24);
      function dt() {
        this.strm = null;
        this.mode = 0;
        this.last = false;
        this.wrap = 0;
        this.havedict = false;
        this.flags = 0;
        this.dmax = 0;
        this.check = 0;
        this.total = 0;
        this.head = null;
        this.wbits = 0;
        this.wsize = 0;
        this.whave = 0;
        this.wnext = 0;
        this.window = null;
        this.hold = 0;
        this.bits = 0;
        this.length = 0;
        this.offset = 0;
        this.extra = 0;
        this.lencode = null;
        this.distcode = null;
        this.lenbits = 0;
        this.distbits = 0;
        this.ncode = 0;
        this.nlen = 0;
        this.ndist = 0;
        this.have = 0;
        this.next = null;
        this.lens = new Uint16Array(320);
        this.work = new Uint16Array(288);
        this.lendyn = null;
        this.distdyn = null;
        this.sane = 0;
        this.back = 0;
        this.was = 0;
      }
      const ct = i => {
        if (!i) {
          return 1;
        }
        const h = i.state;
        return !h || h.strm !== i || h.mode < 16180 || h.mode > 16211 ? 1 : 0;
      };
      const Wt = i => {
        if (ct(i)) {
          return ot;
        }
        const h = i.state;
        i.total_in = i.total_out = h.total = 0;
        i.msg = "";
        if (h.wrap) {
          i.adler = 1 & h.wrap;
        }
        h.mode = 16180;
        h.last = 0;
        h.havedict = 0;
        h.flags = -1;
        h.dmax = 32768;
        h.head = null;
        h.hold = 0;
        h.bits = 0;
        h.lencode = h.lendyn = new Int32Array(852);
        h.distcode = h.distdyn = new Int32Array(592);
        h.sane = 1;
        h.back = -1;
        return at;
      };
      const mt = i => {
        if (ct(i)) {
          return ot;
        }
        const h = i.state;
        h.wsize = 0;
        h.whave = 0;
        h.wnext = 0;
        return Wt(i);
      };
      const Lt = (i, h) => {
        let t;
        if (ct(i)) {
          return ot;
        }
        const E = i.state;
        if (h < 0) {
          t = 0;
          h = -h;
        } else {
          t = 5 + (h >> 4);
          if (h < 48) {
            h &= 15;
          }
        }
        return h && (h < 8 || h > 15) ? ot : (E.window !== null && E.wbits !== h && (E.window = null), E.wrap = t, E.wbits = h, mt(i));
      };
      const Et = (i, h) => {
        if (!i) {
          return ot;
        }
        const t = new dt();
        i.state = t;
        t.strm = i;
        t.window = null;
        t.mode = 16180;
        const E = Lt(i, h);
        if (E !== at) {
          i.state = null;
        }
        return E;
      };
      let Gt;
      let qt;
      let Jt = true;
      const Ae = i => {
        if (Jt) {
          Gt = new Int32Array(512);
          qt = new Int32Array(32);
          let h = 0;
          for (; h < 144;) {
            i.lens[h++] = 8;
          }
          for (; h < 256;) {
            i.lens[h++] = 9;
          }
          for (; h < 280;) {
            i.lens[h++] = 7;
          }
          for (; h < 288;) {
            i.lens[h++] = 8;
          }
          O(1, i.lens, 0, 288, Gt, 0, i.work, {
            bits: 9
          });
          for (h = 0; h < 32;) {
            i.lens[h++] = 5;
          }
          O(2, i.lens, 0, 32, qt, 0, i.work, {
            bits: 5
          });
          Jt = false;
        }
        i.lencode = Gt;
        i.lenbits = 9;
        i.distcode = qt;
        i.distbits = 5;
      };
      const Zt = (i, h, t, E) => {
        let B;
        const m = i.state;
        if (m.window === null) {
          m.wsize = 1 << m.wbits;
          m.wnext = 0;
          m.whave = 0;
          m.window = new Uint8Array(m.wsize);
        }
        if (E >= m.wsize) {
          m.window.set(h.subarray(t - m.wsize, t), 0);
          m.wnext = 0;
          m.whave = m.wsize;
        } else {
          B = m.wsize - m.wnext;
          if (B > E) {
            B = E;
          }
          m.window.set(h.subarray(t - E, t - E + B), m.wnext);
          if (E -= B) {
            m.window.set(h.subarray(t - E, t), 0);
            m.wnext = E;
            m.whave = m.wsize;
          } else {
            m.wnext += B;
            if (m.wnext === m.wsize) {
              m.wnext = 0;
            }
            if (m.whave < m.wsize) {
              m.whave += B;
            }
          }
        }
        return 0;
      };
      var bt = {
        inflateReset: mt,
        inflateReset2: Lt,
        inflateResetKeep: Wt,
        inflateInit: i => Et(i, 15),
        inflateInit2: Et,
        inflate: (i, h) => {
          let t;
          let E;
          let B;
          let m;
          let U;
          let x;
          let V;
          let g;
          let w;
          let ft;
          let Z;
          let I;
          let lt;
          let X;
          let N;
          let $;
          let H;
          let M;
          let J;
          let rt;
          let L;
          let Q;
          let z = 0;
          const D = new Uint8Array(4);
          let G;
          let pt;
          const te = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          if (ct(i) || !i.output || !i.input && i.avail_in !== 0) {
            return ot;
          }
          t = i.state;
          if (t.mode === 16191) {
            t.mode = 16192;
          }
          U = i.next_out;
          B = i.output;
          V = i.avail_out;
          m = i.next_in;
          E = i.input;
          x = i.avail_in;
          g = t.hold;
          w = t.bits;
          ft = x;
          Z = V;
          Q = at;
          t: for (;;) {
            switch (t.mode) {
              case 16180:
                if (t.wrap === 0) {
                  t.mode = 16192;
                  break;
                }
                for (; w < 16;) {
                  if (x === 0) {
                    break t;
                  }
                  x--;
                  g += E[m++] << w;
                  w += 8;
                }
                if (2 & t.wrap && g === 35615) {
                  if (t.wbits === 0) {
                    t.wbits = 15;
                  }
                  t.check = 0;
                  D[0] = 255 & g;
                  D[1] = g >>> 8 & 255;
                  t.check = c(t.check, D, 2, 0);
                  g = 0;
                  w = 0;
                  t.mode = 16181;
                  break;
                }
                if (t.head) {
                  t.head.done = false;
                }
                if (!(1 & t.wrap) || (((255 & g) << 8) + (g >> 8)) % 31) {
                  i.msg = "incorrect header check";
                  t.mode = 16209;
                  break;
                }
                if ((15 & g) !== Ut) {
                  i.msg = "unknown compression method";
                  t.mode = 16209;
                  break;
                }
                g >>>= 4;
                w -= 4;
                L = 8 + (15 & g);
                if (t.wbits === 0) {
                  t.wbits = L;
                }
                if (L > 15 || L > t.wbits) {
                  i.msg = "invalid window size";
                  t.mode = 16209;
                  break;
                }
                t.dmax = 1 << t.wbits;
                t.flags = 0;
                i.adler = t.check = 1;
                t.mode = 512 & g ? 16189 : 16191;
                g = 0;
                w = 0;
                break;
              case 16181:
                for (; w < 16;) {
                  if (x === 0) {
                    break t;
                  }
                  x--;
                  g += E[m++] << w;
                  w += 8;
                }
                t.flags = g;
                if ((255 & t.flags) !== Ut) {
                  i.msg = "unknown compression method";
                  t.mode = 16209;
                  break;
                }
                if (57344 & t.flags) {
                  i.msg = "unknown header flags set";
                  t.mode = 16209;
                  break;
                }
                if (t.head) {
                  t.head.text = g >> 8 & 1;
                }
                if (512 & t.flags && 4 & t.wrap) {
                  D[0] = 255 & g;
                  D[1] = g >>> 8 & 255;
                  t.check = c(t.check, D, 2, 0);
                }
                g = 0;
                w = 0;
                t.mode = 16182;
              case 16182:
                for (; w < 32;) {
                  if (x === 0) {
                    break t;
                  }
                  x--;
                  g += E[m++] << w;
                  w += 8;
                }
                if (t.head) {
                  t.head.time = g;
                }
                if (512 & t.flags && 4 & t.wrap) {
                  D[0] = 255 & g;
                  D[1] = g >>> 8 & 255;
                  D[2] = g >>> 16 & 255;
                  D[3] = g >>> 24 & 255;
                  t.check = c(t.check, D, 4, 0);
                }
                g = 0;
                w = 0;
                t.mode = 16183;
              case 16183:
                for (; w < 16;) {
                  if (x === 0) {
                    break t;
                  }
                  x--;
                  g += E[m++] << w;
                  w += 8;
                }
                if (t.head) {
                  t.head.xflags = 255 & g;
                  t.head.os = g >> 8;
                }
                if (512 & t.flags && 4 & t.wrap) {
                  D[0] = 255 & g;
                  D[1] = g >>> 8 & 255;
                  t.check = c(t.check, D, 2, 0);
                }
                g = 0;
                w = 0;
                t.mode = 16184;
              case 16184:
                if (1024 & t.flags) {
                  for (; w < 16;) {
                    if (x === 0) {
                      break t;
                    }
                    x--;
                    g += E[m++] << w;
                    w += 8;
                  }
                  t.length = g;
                  if (t.head) {
                    t.head.extra_len = g;
                  }
                  if (512 & t.flags && 4 & t.wrap) {
                    D[0] = 255 & g;
                    D[1] = g >>> 8 & 255;
                    t.check = c(t.check, D, 2, 0);
                  }
                  g = 0;
                  w = 0;
                } else if (t.head) {
                  t.head.extra = null;
                }
                t.mode = 16185;
              case 16185:
                if (1024 & t.flags && (I = t.length, I > x && (I = x), I && (t.head && (L = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(E.subarray(m, m + I), L)), 512 & t.flags && 4 & t.wrap && (t.check = c(t.check, E, I, m)), x -= I, m += I, t.length -= I), t.length)) {
                  break t;
                }
                t.length = 0;
                t.mode = 16186;
              case 16186:
                if (2048 & t.flags) {
                  if (x === 0) {
                    break t;
                  }
                  I = 0;
                  do {
                    L = E[m + I++];
                    if (t.head && L && t.length < 65536) {
                      t.head.name += String.fromCharCode(L);
                    }
                  } while (L && I < x);
                  if (512 & t.flags && 4 & t.wrap) {
                    t.check = c(t.check, E, I, m);
                  }
                  x -= I;
                  m += I;
                  if (L) {
                    break t;
                  }
                } else if (t.head) {
                  t.head.name = null;
                }
                t.length = 0;
                t.mode = 16187;
              case 16187:
                if (4096 & t.flags) {
                  if (x === 0) {
                    break t;
                  }
                  I = 0;
                  do {
                    L = E[m + I++];
                    if (t.head && L && t.length < 65536) {
                      t.head.comment += String.fromCharCode(L);
                    }
                  } while (L && I < x);
                  if (512 & t.flags && 4 & t.wrap) {
                    t.check = c(t.check, E, I, m);
                  }
                  x -= I;
                  m += I;
                  if (L) {
                    break t;
                  }
                } else if (t.head) {
                  t.head.comment = null;
                }
                t.mode = 16188;
              case 16188:
                if (512 & t.flags) {
                  for (; w < 16;) {
                    if (x === 0) {
                      break t;
                    }
                    x--;
                    g += E[m++] << w;
                    w += 8;
                  }
                  if (4 & t.wrap && g !== (65535 & t.check)) {
                    i.msg = "header crc mismatch";
                    t.mode = 16209;
                    break;
                  }
                  g = 0;
                  w = 0;
                }
                if (t.head) {
                  t.head.hcrc = t.flags >> 9 & 1;
                  t.head.done = true;
                }
                i.adler = t.check = 0;
                t.mode = 16191;
                break;
              case 16189:
                for (; w < 32;) {
                  if (x === 0) {
                    break t;
                  }
                  x--;
                  g += E[m++] << w;
                  w += 8;
                }
                i.adler = t.check = (g >>> 24 & 255) + (g >>> 8 & 65280) + ((65280 & g) << 8) + ((255 & g) << 24);
                g = 0;
                w = 0;
                t.mode = 16190;
              case 16190:
                if (t.havedict === 0) {
                  i.next_out = U;
                  i.avail_out = V;
                  i.next_in = m;
                  i.avail_in = x;
                  t.hold = g;
                  t.bits = w;
                  return Tt;
                }
                i.adler = t.check = 1;
                t.mode = 16191;
              case 16191:
                if (h === _t || h === yt) {
                  break t;
                }
              case 16192:
                if (t.last) {
                  g >>>= 7 & w;
                  w -= 7 & w;
                  t.mode = 16206;
                  break;
                }
                for (; w < 3;) {
                  if (x === 0) {
                    break t;
                  }
                  x--;
                  g += E[m++] << w;
                  w += 8;
                }
                t.last = 1 & g;
                g >>>= 1;
                w -= 1;
                switch (3 & g) {
                  case 0:
                    t.mode = 16193;
                    break;
                  case 1:
                    Ae(t);
                    t.mode = 16199;
                    if (h === yt) {
                      g >>>= 2;
                      w -= 2;
                      break t;
                    }
                    break;
                  case 2:
                    t.mode = 16196;
                    break;
                  case 3:
                    i.msg = "invalid block type";
                    t.mode = 16209;
                }
                g >>>= 2;
                w -= 2;
                break;
              case 16193:
                g >>>= 7 & w;
                for (w -= 7 & w; w < 32;) {
                  if (x === 0) {
                    break t;
                  }
                  x--;
                  g += E[m++] << w;
                  w += 8;
                }
                if ((65535 & g) != (g >>> 16 ^ 65535)) {
                  i.msg = "invalid stored block lengths";
                  t.mode = 16209;
                  break;
                }
                t.length = 65535 & g;
                g = 0;
                w = 0;
                t.mode = 16194;
                if (h === yt) {
                  break t;
                }
              case 16194:
                t.mode = 16195;
              case 16195:
                I = t.length;
                if (I) {
                  if (I > x) {
                    I = x;
                  }
                  if (I > V) {
                    I = V;
                  }
                  if (I === 0) {
                    break t;
                  }
                  B.set(E.subarray(m, m + I), U);
                  x -= I;
                  m += I;
                  V -= I;
                  U += I;
                  t.length -= I;
                  break;
                }
                t.mode = 16191;
                break;
              case 16196:
                for (; w < 14;) {
                  if (x === 0) {
                    break t;
                  }
                  x--;
                  g += E[m++] << w;
                  w += 8;
                }
                t.nlen = 257 + (31 & g);
                g >>>= 5;
                w -= 5;
                t.ndist = 1 + (31 & g);
                g >>>= 5;
                w -= 5;
                t.ncode = 4 + (15 & g);
                g >>>= 4;
                w -= 4;
                if (t.nlen > 286 || t.ndist > 30) {
                  i.msg = "too many length or distance symbols";
                  t.mode = 16209;
                  break;
                }
                t.have = 0;
                t.mode = 16197;
              case 16197:
                for (; t.have < t.ncode;) {
                  for (; w < 3;) {
                    if (x === 0) {
                      break t;
                    }
                    x--;
                    g += E[m++] << w;
                    w += 8;
                  }
                  t.lens[te[t.have++]] = 7 & g;
                  g >>>= 3;
                  w -= 3;
                }
                for (; t.have < 19;) {
                  t.lens[te[t.have++]] = 0;
                }
                t.lencode = t.lendyn;
                t.lenbits = 7;
                G = {
                  bits: t.lenbits
                };
                Q = O(0, t.lens, 0, 19, t.lencode, 0, t.work, G);
                t.lenbits = G.bits;
                if (Q) {
                  i.msg = "invalid code lengths set";
                  t.mode = 16209;
                  break;
                }
                t.have = 0;
                t.mode = 16198;
              case 16198:
                for (; t.have < t.nlen + t.ndist;) {
                  for (; z = t.lencode[g & (1 << t.lenbits) - 1], N = z >>> 24, $ = z >>> 16 & 255, H = 65535 & z, !(N <= w);) {
                    if (x === 0) {
                      break t;
                    }
                    x--;
                    g += E[m++] << w;
                    w += 8;
                  }
                  if (H < 16) {
                    g >>>= N;
                    w -= N;
                    t.lens[t.have++] = H;
                  } else {
                    if (H === 16) {
                      for (pt = N + 2; w < pt;) {
                        if (x === 0) {
                          break t;
                        }
                        x--;
                        g += E[m++] << w;
                        w += 8;
                      }
                      g >>>= N;
                      w -= N;
                      if (t.have === 0) {
                        i.msg = "invalid bit length repeat";
                        t.mode = 16209;
                        break;
                      }
                      L = t.lens[t.have - 1];
                      I = 3 + (3 & g);
                      g >>>= 2;
                      w -= 2;
                    } else if (H === 17) {
                      for (pt = N + 3; w < pt;) {
                        if (x === 0) {
                          break t;
                        }
                        x--;
                        g += E[m++] << w;
                        w += 8;
                      }
                      g >>>= N;
                      w -= N;
                      L = 0;
                      I = 3 + (7 & g);
                      g >>>= 3;
                      w -= 3;
                    } else {
                      for (pt = N + 7; w < pt;) {
                        if (x === 0) {
                          break t;
                        }
                        x--;
                        g += E[m++] << w;
                        w += 8;
                      }
                      g >>>= N;
                      w -= N;
                      L = 0;
                      I = 11 + (127 & g);
                      g >>>= 7;
                      w -= 7;
                    }
                    if (t.have + I > t.nlen + t.ndist) {
                      i.msg = "invalid bit length repeat";
                      t.mode = 16209;
                      break;
                    }
                    for (; I--;) {
                      t.lens[t.have++] = L;
                    }
                  }
                }
                if (t.mode === 16209) {
                  break;
                }
                if (t.lens[256] === 0) {
                  i.msg = "invalid code -- missing end-of-block";
                  t.mode = 16209;
                  break;
                }
                t.lenbits = 9;
                G = {
                  bits: t.lenbits
                };
                Q = O(1, t.lens, 0, t.nlen, t.lencode, 0, t.work, G);
                t.lenbits = G.bits;
                if (Q) {
                  i.msg = "invalid literal/lengths set";
                  t.mode = 16209;
                  break;
                }
                t.distbits = 6;
                t.distcode = t.distdyn;
                G = {
                  bits: t.distbits
                };
                Q = O(2, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, G);
                t.distbits = G.bits;
                if (Q) {
                  i.msg = "invalid distances set";
                  t.mode = 16209;
                  break;
                }
                t.mode = 16199;
                if (h === yt) {
                  break t;
                }
              case 16199:
                t.mode = 16200;
              case 16200:
                if (x >= 6 && V >= 258) {
                  i.next_out = U;
                  i.avail_out = V;
                  i.next_in = m;
                  i.avail_in = x;
                  t.hold = g;
                  t.bits = w;
                  T(i, Z);
                  U = i.next_out;
                  B = i.output;
                  V = i.avail_out;
                  m = i.next_in;
                  E = i.input;
                  x = i.avail_in;
                  g = t.hold;
                  w = t.bits;
                  if (t.mode === 16191) {
                    t.back = -1;
                  }
                  break;
                }
                for (t.back = 0; z = t.lencode[g & (1 << t.lenbits) - 1], N = z >>> 24, $ = z >>> 16 & 255, H = 65535 & z, !(N <= w);) {
                  if (x === 0) {
                    break t;
                  }
                  x--;
                  g += E[m++] << w;
                  w += 8;
                }
                if ($ && !(240 & $)) {
                  M = N;
                  J = $;
                  for (rt = H; z = t.lencode[rt + ((g & (1 << M + J) - 1) >> M)], N = z >>> 24, $ = z >>> 16 & 255, H = 65535 & z, !(M + N <= w);) {
                    if (x === 0) {
                      break t;
                    }
                    x--;
                    g += E[m++] << w;
                    w += 8;
                  }
                  g >>>= M;
                  w -= M;
                  t.back += M;
                }
                g >>>= N;
                w -= N;
                t.back += N;
                t.length = H;
                if ($ === 0) {
                  t.mode = 16205;
                  break;
                }
                if (32 & $) {
                  t.back = -1;
                  t.mode = 16191;
                  break;
                }
                if (64 & $) {
                  i.msg = "invalid literal/length code";
                  t.mode = 16209;
                  break;
                }
                t.extra = 15 & $;
                t.mode = 16201;
              case 16201:
                if (t.extra) {
                  for (pt = t.extra; w < pt;) {
                    if (x === 0) {
                      break t;
                    }
                    x--;
                    g += E[m++] << w;
                    w += 8;
                  }
                  t.length += g & (1 << t.extra) - 1;
                  g >>>= t.extra;
                  w -= t.extra;
                  t.back += t.extra;
                }
                t.was = t.length;
                t.mode = 16202;
              case 16202:
                for (; z = t.distcode[g & (1 << t.distbits) - 1], N = z >>> 24, $ = z >>> 16 & 255, H = 65535 & z, !(N <= w);) {
                  if (x === 0) {
                    break t;
                  }
                  x--;
                  g += E[m++] << w;
                  w += 8;
                }
                if (!(240 & $)) {
                  M = N;
                  J = $;
                  for (rt = H; z = t.distcode[rt + ((g & (1 << M + J) - 1) >> M)], N = z >>> 24, $ = z >>> 16 & 255, H = 65535 & z, !(M + N <= w);) {
                    if (x === 0) {
                      break t;
                    }
                    x--;
                    g += E[m++] << w;
                    w += 8;
                  }
                  g >>>= M;
                  w -= M;
                  t.back += M;
                }
                g >>>= N;
                w -= N;
                t.back += N;
                if (64 & $) {
                  i.msg = "invalid distance code";
                  t.mode = 16209;
                  break;
                }
                t.offset = H;
                t.extra = 15 & $;
                t.mode = 16203;
              case 16203:
                if (t.extra) {
                  for (pt = t.extra; w < pt;) {
                    if (x === 0) {
                      break t;
                    }
                    x--;
                    g += E[m++] << w;
                    w += 8;
                  }
                  t.offset += g & (1 << t.extra) - 1;
                  g >>>= t.extra;
                  w -= t.extra;
                  t.back += t.extra;
                }
                if (t.offset > t.dmax) {
                  i.msg = "invalid distance too far back";
                  t.mode = 16209;
                  break;
                }
                t.mode = 16204;
              case 16204:
                if (V === 0) {
                  break t;
                }
                I = Z - V;
                if (t.offset > I) {
                  I = t.offset - I;
                  if (I > t.whave && t.sane) {
                    i.msg = "invalid distance too far back";
                    t.mode = 16209;
                    break;
                  }
                  if (I > t.wnext) {
                    I -= t.wnext;
                    lt = t.wsize - I;
                  } else {
                    lt = t.wnext - I;
                  }
                  if (I > t.length) {
                    I = t.length;
                  }
                  X = t.window;
                } else {
                  X = B;
                  lt = U - t.offset;
                  I = t.length;
                }
                if (I > V) {
                  I = V;
                }
                V -= I;
                t.length -= I;
                do {
                  B[U++] = X[lt++];
                } while (--I);
                if (t.length === 0) {
                  t.mode = 16200;
                }
                break;
              case 16205:
                if (V === 0) {
                  break t;
                }
                B[U++] = t.length;
                V--;
                t.mode = 16200;
                break;
              case 16206:
                if (t.wrap) {
                  for (; w < 32;) {
                    if (x === 0) {
                      break t;
                    }
                    x--;
                    g |= E[m++] << w;
                    w += 8;
                  }
                  Z -= V;
                  i.total_out += Z;
                  t.total += Z;
                  if (4 & t.wrap && Z) {
                    i.adler = t.check = t.flags ? c(t.check, B, Z, U - Z) : s(t.check, B, Z, U - Z);
                  }
                  Z = V;
                  if (4 & t.wrap && (t.flags ? g : (g >>> 24 & 255) + (g >>> 8 & 65280) + ((65280 & g) << 8) + ((255 & g) << 24)) !== t.check) {
                    i.msg = "incorrect data check";
                    t.mode = 16209;
                    break;
                  }
                  g = 0;
                  w = 0;
                }
                t.mode = 16207;
              case 16207:
                if (t.wrap && t.flags) {
                  for (; w < 32;) {
                    if (x === 0) {
                      break t;
                    }
                    x--;
                    g += E[m++] << w;
                    w += 8;
                  }
                  if (4 & t.wrap && g !== (4294967295 & t.total)) {
                    i.msg = "incorrect length check";
                    t.mode = 16209;
                    break;
                  }
                  g = 0;
                  w = 0;
                }
                t.mode = 16208;
              case 16208:
                Q = Ht;
                break t;
              case 16209:
                Q = At;
                break t;
              case 16210:
                return St;
              default:
                return ot;
            }
          }
          i.next_out = U;
          i.avail_out = V;
          i.next_in = m;
          i.avail_in = x;
          t.hold = g;
          t.bits = w;
          if (t.wsize || Z !== i.avail_out && t.mode < 16209 && (t.mode < 16206 || h !== ut)) {
            Zt(i, i.output, i.next_out, Z - i.avail_out);
          }
          ft -= i.avail_in;
          Z -= i.avail_out;
          i.total_in += ft;
          i.total_out += Z;
          t.total += Z;
          if (4 & t.wrap && Z) {
            i.adler = t.check = t.flags ? c(t.check, B, Z, i.next_out - Z) : s(t.check, B, Z, i.next_out - Z);
          }
          i.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === 16191 ? 128 : 0) + (t.mode === 16199 || t.mode === 16194 ? 256 : 0);
          if ((ft === 0 && Z === 0 || h === ut) && Q === at) {
            Q = Mt;
          }
          return Q;
        },
        inflateEnd: i => {
          if (ct(i)) {
            return ot;
          }
          let h = i.state;
          if (h.window) {
            h.window = null;
          }
          i.state = null;
          return at;
        },
        inflateGetHeader: (i, h) => {
          if (ct(i)) {
            return ot;
          }
          const t = i.state;
          return 2 & t.wrap ? (t.head = h, h.done = false, at) : ot;
        },
        inflateSetDictionary: (i, h) => {
          const t = h.length;
          let E;
          let B;
          let m;
          return ct(i) ? ot : (E = i.state, E.wrap !== 0 && E.mode !== 16190 ? ot : E.mode === 16190 && (B = 1, B = s(B, h, t, 0), B !== E.check) ? At : (m = Zt(i, h, t, t), m ? (E.mode = 16210, St) : (E.havedict = 1, at)));
        },
        inflateInfo: "pako inflate (from Nodeca project)"
      };
      const ae = (i, h) => Object.prototype.hasOwnProperty.call(i, h);
      var $t = function (i) {
        const h = Array.prototype.slice.call(arguments, 1);
        for (; h.length;) {
          const t = h.shift();
          if (t) {
            if (typeof t != "object") {
              throw new TypeError(t + "must be non-object");
            }
            for (const E in t) if (Object.prototype.hasOwnProperty.call(t, E)) {
              i[E] = t[E];
            }
          }
        }
        return i;
      };
      var fe = i => {
        let h = 0;
        let E = 0;
        for (let B = i.length; E < B; E++) {
          h += i[E].length;
        }
        const t = new Uint8Array(h);
        let E = 0;
        let B = 0;
        for (let m = i.length; E < m; E++) {
          let U = i[E];
          t.set(U, B);
          B += U.length;
        }
        return t;
      };
      let le = true;
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        le = false;
      }
      const Dt = new Uint8Array(256);
      for (let i = 0; i < 256; i++) {
        Dt[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
      }
      Dt[254] = Dt[254] = 1;
      var Se = i => {
        if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
          return new TextEncoder().encode(i);
        }
        let h;
        let t;
        let E;
        let B;
        let m;
        let U = i.length;
        let x = 0;
        for (B = 0; B < U; B++) {
          t = i.charCodeAt(B);
          if ((64512 & t) == 55296 && B + 1 < U) {
            E = i.charCodeAt(B + 1);
            if ((64512 & E) == 56320) {
              t = 65536 + (t - 55296 << 10) + (E - 56320);
              B++;
            }
          }
          x += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
        }
        h = new Uint8Array(x);
        m = 0;
        for (B = 0; m < x; B++) {
          t = i.charCodeAt(B);
          if ((64512 & t) == 55296 && B + 1 < U) {
            E = i.charCodeAt(B + 1);
            if ((64512 & E) == 56320) {
              t = 65536 + (t - 55296 << 10) + (E - 56320);
              B++;
            }
          }
          if (t < 128) {
            h[m++] = t;
          } else if (t < 2048) {
            h[m++] = 192 | t >>> 6;
            h[m++] = 128 | 63 & t;
          } else if (t < 65536) {
            h[m++] = 224 | t >>> 12;
            h[m++] = 128 | t >>> 6 & 63;
            h[m++] = 128 | 63 & t;
          } else {
            h[m++] = 240 | t >>> 18;
            h[m++] = 128 | t >>> 12 & 63;
            h[m++] = 128 | t >>> 6 & 63;
            h[m++] = 128 | 63 & t;
          }
        }
        return h;
      };
      var ue = (i, h) => {
        const t = h || i.length;
        if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
          return new TextDecoder().decode(i.subarray(0, h));
        }
        let E;
        let B;
        const m = new Array(2 * t);
        B = 0;
        for (E = 0; E < t;) {
          let U = i[E++];
          if (U < 128) {
            m[B++] = U;
            continue;
          }
          let x = Dt[U];
          if (x > 4) {
            m[B++] = 65533;
            E += x - 1;
          } else {
            for (U &= x === 2 ? 31 : x === 3 ? 15 : 7; x > 1 && E < t;) {
              U = U << 6 | 63 & i[E++];
              x--;
            }
            if (x > 1) {
              m[B++] = 65533;
            } else if (U < 65536) {
              m[B++] = U;
            } else {
              U -= 65536;
              m[B++] = 55296 | U >> 10 & 1023;
              m[B++] = 56320 | 1023 & U;
            }
          }
        }
        return ((U, x) => {
          if (x < 65534 && U.subarray && le) {
            return String.fromCharCode.apply(null, U.length === x ? U : U.subarray(0, x));
          }
          let V = "";
          for (let g = 0; g < x; g++) {
            V += String.fromCharCode(U[g]);
          }
          return V;
        })(m, B);
      };
      var Ee = (i, h) => {
        if ((h = h || i.length) > i.length) {
          h = i.length;
        }
        let t = h - 1;
        for (; t >= 0 && (192 & i[t]) == 128;) {
          t--;
        }
        return t < 0 || t === 0 ? h : t + Dt[i[t]] > h ? t : h;
      };
      var xt = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
      };
      var ce = function () {
        this.input = null;
        this.next_in = 0;
        this.avail_in = 0;
        this.total_in = 0;
        this.output = null;
        this.next_out = 0;
        this.avail_out = 0;
        this.total_out = 0;
        this.msg = "";
        this.state = null;
        this.data_type = 2;
        this.adler = 0;
      };
      var he = function () {
        this.text = 0;
        this.time = 0;
        this.xflags = 0;
        this.os = 0;
        this.extra = null;
        this.extra_len = 0;
        this.name = "";
        this.comment = "";
        this.hcrc = 0;
        this.done = false;
      };
      const pe = Object.prototype.toString;
      const {
        Z_NO_FLUSH: C,
        Z_FINISH: It,
        Z_OK: e,
        Z_STREAM_END: r,
        Z_NEED_DICT: a,
        Z_STREAM_ERROR: u,
        Z_DATA_ERROR: v,
        Z_MEM_ERROR: d
      } = nt;
      function k(i) {
        this.options = $t({
          chunkSize: 65536,
          windowBits: 15,
          to: ""
        }, i || {});
        const h = this.options;
        if (h.raw && h.windowBits >= 0 && h.windowBits < 16) {
          h.windowBits = -h.windowBits;
          if (h.windowBits === 0) {
            h.windowBits = -15;
          }
        }
        if (!(!(h.windowBits >= 0 && h.windowBits < 16) || i && i.windowBits)) {
          h.windowBits += 32;
        }
        if (h.windowBits > 15 && h.windowBits < 48 && !(15 & h.windowBits)) {
          h.windowBits |= 15;
        }
        this.err = 0;
        this.msg = "";
        this.ended = false;
        this.chunks = [];
        this.strm = new ce();
        this.strm.avail_out = 0;
        let t = bt.inflateInit2(this.strm, h.windowBits);
        if (t !== e) {
          throw new Error(xt[t]);
        }
        this.header = new he();
        bt.inflateGetHeader(this.strm, this.header);
        if (h.dictionary && (typeof h.dictionary == "string" ? h.dictionary = Se(h.dictionary) : pe.call(h.dictionary) === "[object ArrayBuffer]" && (h.dictionary = new Uint8Array(h.dictionary)), h.raw && (t = bt.inflateSetDictionary(this.strm, h.dictionary), t !== e))) {
          throw new Error(xt[t]);
        }
      }
      function _(i, h) {
        const t = new k(h);
        t.push(i);
        if (t.err) {
          throw t.msg || xt[t.err];
        }
        return t.result;
      }
      k.prototype.push = function (i, h) {
        const t = this.strm;
        const E = this.options.chunkSize;
        const B = this.options.dictionary;
        let m;
        let U;
        let x;
        if (this.ended) {
          return false;
        }
        U = h === ~~h ? h : h === true ? It : C;
        if (pe.call(i) === "[object ArrayBuffer]") {
          t.input = new Uint8Array(i);
        } else {
          t.input = i;
        }
        t.next_in = 0;
        for (t.avail_in = t.input.length;;) {
          if (t.avail_out === 0) {
            t.output = new Uint8Array(E);
            t.next_out = 0;
            t.avail_out = E;
          }
          m = bt.inflate(t, U);
          for (m === a && B && (m = bt.inflateSetDictionary(t, B), m === e ? m = bt.inflate(t, U) : m === v && (m = a)); t.avail_in > 0 && m === r && t.state.wrap > 0 && i[t.next_in] !== 0;) {
            bt.inflateReset(t);
            m = bt.inflate(t, U);
          }
          switch (m) {
            case u:
            case v:
            case a:
            case d:
              this.onEnd(m);
              this.ended = true;
              return false;
          }
          x = t.avail_out;
          if (t.next_out && (t.avail_out === 0 || m === r)) {
            if (this.options.to === "string") {
              let V = Ee(t.output, t.next_out);
              let g = t.next_out - V;
              let w = ue(t.output, V);
              t.next_out = g;
              t.avail_out = E - g;
              if (g) {
                t.output.set(t.output.subarray(V, V + g), 0);
              }
              this.onData(w);
            } else {
              this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
            }
          }
          if (m !== e || x !== 0) {
            if (m === r) {
              m = bt.inflateEnd(this.strm);
              this.onEnd(m);
              this.ended = true;
              return true;
            }
            if (t.avail_in === 0) {
              break;
            }
          }
        }
        return true;
      };
      k.prototype.onData = function (i) {
        this.chunks.push(i);
      };
      k.prototype.onEnd = function (i) {
        if (i === e) {
          if (this.options.to === "string") {
            this.result = this.chunks.join("");
          } else {
            this.result = fe(this.chunks);
          }
        }
        this.chunks = [];
        this.err = i;
        this.msg = this.strm.msg;
      };
      var W = function (i, h) {
        (h = h || {}).raw = true;
        return _(i, h);
      };
      var ht = {
        Inflate: k,
        inflate: _,
        inflateRaw: W,
        ungzip: _,
        constants: nt
      };
      o.Inflate = k;
      o.constants = nt;
      o.default = ht;
      o.inflate = _;
      o.inflateRaw = W;
      o.ungzip = _;
      Object.defineProperty(o, "__esModule", {
        value: true
      });
    });
  })(Ie, Ie.exports);
  var nr = Ie.exports;
  var ir = nr && nr.__esModule && Object.prototype.hasOwnProperty.call(nr, "default") ? nr.default : nr;
  function or(f, n) {
    return ir.inflate(f, n ? {
      to: "string"
    } : undefined);
  }
  const Ft = typeof window < "u" ? window : self;
  function sr(f, n, o) {
    const s = (l, c) => {
      f.attachListenPort(l);
      if (c) {
        f.attachSendPort(c);
      }
      n?.(l);
    };
    f.setOnPortDisconnect(o);
    if (typeof SharedWorkerGlobalScope < "u") {
      Ft.addEventListener("connect", l => s(l.source, l.source));
    } else if (typeof ServiceWorkerGlobalScope < "u") {
      s(Ft, null);
    } else {
      s(Ft, Ft);
    }
  }
  const zt = {
    test: location.search.indexOf("test=1") > 0,
    debug: location.search.indexOf("debug=1") > 0,
    http: false,
    ssl: true,
    asServiceWorker: false,
    transport: "websocket",
    noSharedWorker: location.search.indexOf("noSharedWorker=1") > 0,
    multipleTransports: true
  };
  if (zt.http = location.search.indexOf("http=1") > 0) {
    zt.multipleTransports = false;
  }
  if (zt.multipleTransports) {
    zt.http = true;
  }
  if (zt.http) {
    zt.transport = "https";
  }
  const Me = zt.debug;
  const ar = typeof window < "u" ? window : self;
  const fr = Date.now() % Math.random() * 1e8 | 0;
  function Te(f, n) {
    const o = f.indexOf(n);
    return (o === -1 ? undefined : f.splice(o, 1))?.[0];
  }
  const se = typeof ServiceWorkerGlobalScope < "u" && self instanceof ServiceWorkerGlobalScope;
  const be = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && !se;
  const We = be || se;
  const lr = () => self.clients.matchAll({
    includeUncontrolled: false,
    type: "window"
  });
  const Ge = (f, ...n) => {
    try {
      f.postMessage(...n);
    } catch (o) {
      console.error("[worker] postMessage error:", o, n);
    }
  };
  const Je = (f, ...n) => {
    self.clients.matchAll({
      includeUncontrolled: false,
      type: "window"
    }).then(o => {
      if (o.length) {
        o.slice(f ? 0 : -1).forEach(s => {
          Ge(s, ...n);
        });
      }
    });
  };
  if (se) {
    Je.bind(null, false);
  }
  if (se) {
    Je.bind(null, true);
  }
  class ur {
    constructor(n) {
      this._constructor(n);
    }
    _constructor(n) {
      this.reuseResults = n;
      this.listeners = {};
      this.listenerResults = {};
    }
    addEventListener(n, o, s) {
      var c;
      const l = {
        callback: o,
        options: s
      };
      ((c = this.listeners)[n] ?? (c[n] = new Set())).add(l);
      if (this.listenerResults.hasOwnProperty(n) && (o(...this.listenerResults[n]), s?.once)) {
        this.listeners[n].delete(l);
        return;
      }
    }
    addMultipleEventsListeners(n) {
      for (const o in n) this.addEventListener(o, n[o]);
    }
    removeEventListener(n, o, s) {
      if (this.listeners[n]) {
        for (const l of this.listeners[n]) if (l.callback === o) {
          this.listeners[n].delete(l);
          break;
        }
      }
    }
    invokeListenerCallback(n, o, ...s) {
      let l;
      let c;
      try {
        l = o.callback(...s);
      } catch (y) {
        c = y;
      }
      if (o.options?.once) {
        this.removeEventListener(n, o.callback);
      }
      if (c) {
        throw c;
      }
      return l;
    }
    _dispatchEvent(n, o, ...s) {
      if (this.reuseResults) {
        this.listenerResults[n] = s;
      }
      const l = o && [];
      const c = this.listeners[n];
      if (c) {
        for (const y of c) {
          const T = this.invokeListenerCallback(n, y, ...s);
          if (l) {
            l.push(T);
          }
        }
      }
      return l;
    }
    dispatchResultableEvent(n, ...o) {
      return this._dispatchEvent(n, true, ...o);
    }
    dispatchEvent(n, ...o) {
      this._dispatchEvent(n, false, ...o);
    }
    cleanup() {
      this.listeners = {};
      this.listenerResults = {};
    }
  }
  const Be = {};
  function cr(f) {
    return Be[f] ?? (Be[f] = {
      type: f
    });
  }
  const ye = navigator ? navigator.userAgent : null;
  navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i);
  navigator.userAgent.toLowerCase().indexOf("android");
  (() => {
    try {
      return +navigator.userAgent.match(/Chrom(?:e|ium)\/(.+?)(?:\s|\.)/)[1];
    } catch {}
  })();
  const hr = "safari" in Ft || !!(ye && (/\b(iPad|iPhone|iPod)\b/.test(ye) || ye.match("Safari") && !ye.match("Chrome")));
  const pr = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  if (navigator.maxTouchPoints === undefined || navigator.maxTouchPoints > 0) {
    navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i) != -1;
  }
  const dr = Date.now();
  function Le() {
    return "[" + ((Date.now() - dr) / 1e3).toFixed(3) + "]";
  }
  const vr = [0, 1, 2, 4, 8];
  const gr = hr || pr;
  const Ne = !gr;
  const Pe = {
    reset: "\x1B[0m",
    bright: "\x1B[1m",
    dim: "\x1B[2m",
    underscore: "\x1B[4m",
    blink: "\x1B[5m",
    reverse: "\x1B[7m",
    hidden: "\x1B[8m",
    fg: {
      black: "\x1B[30m",
      red: "\x1B[31m",
      green: "\x1B[32m",
      yellow: "\x1B[33m",
      blue: "\x1B[34m",
      magenta: "\x1B[35m",
      cyan: "\x1B[36m",
      white: "\x1B[37m"
    },
    bg: {
      black: "\x1B[40m",
      red: "\x1B[41m",
      green: "\x1B[42m",
      yellow: "\x1B[43m",
      blue: "\x1B[44m",
      magenta: "\x1B[45m",
      cyan: "\x1B[46m",
      white: "\x1B[47m"
    }
  };
  const yr = [["debug", 8], ["info", 4], ["warn", 2], ["error", 1], ["assert", 1], ["trace", 4], ["group", 4], ["groupCollapsed", 4], ["groupEnd", 4]];
  function Xe(f, n = 7, o = false, s = "") {
    let l;
    if (!Me && !o) {
      n = 1;
    }
    if (Ne) {
      if (!s) {
        if (se) {
          s = Pe.fg.yellow;
        } else if (be) {
          s = Pe.fg.cyan;
        }
      }
    } else {
      s = "";
    }
    const c = s;
    if (s) {
      s = `%s ${s}%s`;
    } else {
      s = "%s";
    }
    const y = function (...R) {
      return n & 4 && console.log(s, "[" + ((Date.now() - dr) / 1e3).toFixed(3) + "]", f, ...R);
    };
    yr.forEach(([R, A]) => {
      y[R] = function (...p) {
        return n & A && console[R](s, "[" + ((Date.now() - dr) / 1e3).toFixed(3) + "]", f, ...p);
      };
    });
    y.setPrefix = function (R) {
      l = R;
      f = "[" + R + "]";
    };
    y.setPrefix(f);
    y.setLevel = function (R) {
      n = vr.slice(0, R + 1).reduce((A, p) => A | p, 0);
    };
    const T = {};
    y.bindPrefix = function (R, A = n) {
      return T[R] ?? (T[R] = Xe(`${l}] ${Ne && c ? Pe.reset : ""}[${R}`, A, o, c));
    };
    return y;
  }
  const wr = true;
  class mr extends ur {
    constructor(n) {
      super(false);
      this.logSuffix = n;
      this.onMessage = o => {
        const s = o.data;
        const l = o.source || o.currentTarget;
        this.processTaskMap[s.type](s, l, o);
      };
      this.processResultTask = o => {
        const {
          taskId: s,
          result: l,
          error: c
        } = o.payload;
        const y = this.awaiting[s];
        if (y) {
          if (this.debug) {
            this.log.debug("done", y.taskType, l, c);
          }
          if ("error" in o.payload) {
            y.reject(c);
          } else {
            y.resolve(l);
          }
          delete this.awaiting[s];
        }
      };
      this.processAckTask = o => {
        const s = o.payload;
        const l = this.awaiting[s.taskId];
        if (!l) {
          return;
        }
        const c = l.resolve;
        const y = {
          cached: s.cached,
          result: s.cached ? "result" in s ? Promise.resolve(s.result) : Promise.reject(s.error) : new Promise((T, R) => {
            l.resolve = T;
            l.reject = R;
          })
        };
        c(y);
        if (s.cached) {
          delete this.awaiting[s.taskId];
        }
      };
      this.processPingTask = (o, s, l) => {
        this.pushTask(this.createTask("pong", undefined), l.source);
      };
      this.processPongTask = (o, s, l) => {
        const c = this.pingResolves.get(s);
        if (c) {
          this.pingResolves.delete(s);
          c();
        }
      };
      this.processCloseTask = (o, s, l) => {
        this.detachPort(s);
      };
      this.processBatchTask = (o, s, l) => {
        const c = {
          data: l.data,
          source: l.source,
          currentTarget: l.currentTarget
        };
        o.payload.forEach(y => {
          c.data = y;
          this.onMessage(c);
        });
      };
      this.processLockTask = (o, s, l) => {
        const c = o.payload;
        if (!this.requestedLocks.has(c)) {
          this.requestedLocks.set(c, s);
          navigator.locks.request(c, () => {
            this.processCloseTask(undefined, s, undefined);
            this.requestedLocks.delete(c);
          });
        }
      };
      this.processInvokeTask = async (o, s, l) => {
        const c = o.id;
        const y = o.payload;
        let T;
        let R;
        let A;
        if (!y.void) {
          T = {
            taskId: c
          };
          R = this.createTask("result", T);
        }
        if (y.withAck) {
          A = this.createTask("ack", {
            taskId: c,
            cached: true
          });
        }
        let p;
        try {
          const b = this.listeners[y.type];
          if (!b?.size) {
            throw new Error("no listener");
          }
          const S = b.values().next().value;
          let O = this.invokeListenerCallback(y.type, S, y.payload, s, l);
          if (y.void) {
            return;
          }
          p = O instanceof Promise;
          if (A) {
            const nt = !p;
            A.payload.cached = nt;
            if (nt) {
              A.payload.result = O;
            }
            this.pushTask(A, s);
            if (nt) {
              return;
            }
          }
          if (p) {
            O = await O;
          }
          T.result = O;
        } catch (b) {
          this.log.error("worker task error:", b, o);
          if (y.void) {
            return;
          }
          if (A && A.payload.cached) {
            A.payload.error = b;
            this.pushTask(A, s);
            return;
          }
          T.error = b;
        }
        this.pushTask(R, s);
      };
      this.listenPorts = [];
      this.sendPorts = [];
      this.pingResolves = new Map();
      this.taskId = 0;
      this.awaiting = {};
      this.pending = new Map();
      this.log = Xe("MP" + (n ? "-" + n : ""));
      this.debug = Me;
      this.heldLocks = new Map();
      this.requestedLocks = new Map();
      this.processTaskMap = {
        result: this.processResultTask,
        ack: this.processAckTask,
        invoke: this.processInvokeTask,
        ping: this.processPingTask,
        pong: this.processPongTask,
        close: this.processCloseTask,
        lock: this.processLockTask,
        batch: this.processBatchTask
      };
    }
    setOnPortDisconnect(n) {
      this.onPortDisconnect = n;
    }
    attachPort(n) {
      this.attachListenPort(n);
      this.attachSendPort(n);
    }
    attachListenPort(n) {
      this.listenPorts.push(n);
      n.addEventListener("message", this.onMessage);
    }
    attachSendPort(n) {
      this.log.warn("attaching send port");
      n.start?.();
      this.sendPorts.push(n);
      if (typeof window < "u" && wr) {
        if ("locks" in navigator) {
          const o = ["lock", fr, this.logSuffix || "", Math.random() * 2147483647 | 0].join("-");
          this.log.warn("created lock", o);
          const s = new Promise(l => this.heldLocks.set(n, {
            resolve: l,
            id: o
          })).then(() => this.heldLocks.delete(n));
          navigator.locks.request(o, () => (this.resendLockTask(n), s));
        } else {
          window.addEventListener("beforeunload", () => {
            const o = this.createTask("close", undefined);
            this.postMessage(undefined, o);
          });
        }
      }
      this.releasePending();
    }
    resendLockTask(n) {
      const o = this.heldLocks.get(n);
      if (o) {
        this.pushTask(this.createTask("lock", o.id), n);
      }
    }
    detachPort(n) {
      this.log.warn("disconnecting port");
      Te(this.listenPorts, n);
      Te(this.sendPorts, n);
      n.removeEventListener?.("message", this.onMessage);
      n.close?.();
      this.onPortDisconnect?.(n);
      this.heldLocks.get(n)?.resolve();
      const s = cr("PORT_DISCONNECTED");
      for (const l in this.awaiting) {
        const c = this.awaiting[l];
        if (c.port === n) {
          c.reject(s);
          delete this.awaiting[l];
        }
      }
    }
    postMessage(n, o) {
      (Array.isArray(n) ? n : n ? [n] : this.sendPorts).forEach(l => {
        l.postMessage(o, o.transfer);
      });
    }
    async releasePending() {
      if (!this.releasingPending) {
        this.releasingPending = true;
        await Promise.resolve();
        if (this.debug) {
          this.log.debug("releasing tasks, length:", this.pending.size);
        }
        this.pending.forEach((n, o) => {
          let s = n;
          {
            let c;
            s = [];
            n.forEach(y => {
              if (y.transfer) {
                c = undefined;
                s.push(y);
              } else {
                if (!c) {
                  c = this.createTask("batch", []);
                  s.push(c);
                }
                c.payload.push(y);
              }
            });
          }
          const l = o ? [o] : this.sendPorts;
          if (l.length) {
            s.forEach(c => {
              try {
                this.postMessage(l, c);
              } catch (y) {
                this.log.error("postMessage error:", y, c, l);
              }
            });
            this.pending.delete(o);
          }
        });
        if (this.debug) {
          this.log.debug("released tasks");
        }
        this.releasingPending = false;
      }
    }
    createTask(n, o, s) {
      return {
        type: n,
        payload: o,
        id: this.taskId++,
        transfer: s
      };
    }
    createInvokeTask(n, o, s, l, c) {
      return this.createTask("invoke", {
        type: n,
        payload: o,
        withAck: s,
        void: l
      }, c);
    }
    pushTask(n, o) {
      let s = this.pending.get(o);
      if (!s) {
        this.pending.set(o, s = []);
      }
      s.push(n);
      this.releasePending();
    }
    invokeVoid(n, o, s, l) {
      const c = this.createInvokeTask(n, o, undefined, true, l);
      this.pushTask(c, s);
    }
    invoke(n, o, s, l, c) {
      if (this.debug) {
        this.log.debug("start", n, o);
      }
      let y;
      const T = new Promise((R, A) => {
        y = this.createInvokeTask(n, o, s, undefined, c);
        this.awaiting[y.id] = {
          resolve: R,
          reject: A,
          taskType: n,
          port: l
        };
        this.pushTask(y, l);
      });
      if (We) {
        T.finally(() => {
          clearInterval(R);
        });
        const R = Ft.setInterval(() => {
          this.log.error("task still has no result", y, l);
        }, 6e4);
      }
      return T;
    }
    invokeExceptSource(n, o, s) {
      const l = this.sendPorts.slice();
      Te(l, s);
      l.forEach(c => {
        this.invokeVoid(n, o, c);
      });
    }
  }
  class br extends mr {
    constructor() {
      super("CRYPTO");
      this.lastIndex = -1;
    }
    invokeCryptoNew({
      method: n,
      args: o,
      transfer: s
    }) {
      const l = {
        method: n,
        args: o
      };
      const c = this.listeners.invoke;
      if (c?.size) {
        let T = c.values().next().value.callback(l);
        if (!We && !(T instanceof Promise)) {
          T = Promise.resolve(T);
        }
        return T;
      }
      const y = n === "aes-encrypt" || n === "aes-decrypt" ? this.lastIndex = (this.lastIndex + 1) % this.sendPorts.length : 0;
      return this.invoke("invoke", l, undefined, this.sendPorts[y], s);
    }
    invokeCrypto(n, ...o) {
      return this.invokeCryptoNew({
        method: n,
        args: o
      });
    }
  }
  const it = new br();
  if (ar) {
    ar.cryptoMessagePort = it;
  }
  function kr(f) {
    const n = f.length;
    const o = n * 8;
    let s = Y(f[0]).and(127).shiftLeft(o - 8);
    for (let l = 1; l < n; ++l) {
      const c = o - (l + 1) * 8;
      const y = Y(f[l]);
      s = s.or(c ? y.shiftLeft(c) : y);
    }
    return s;
  }
  const Ce = ["1f609", "1f60d", "1f61b", "1f62d", "1f631", "1f621", "1f60e", "1f634", "1f635", "1f608", "1f62c", "1f607", "1f60f", "1f46e", "1f477", "1f482", "1f476", "1f468", "1f469", "1f474", "1f475", "1f63b", "1f63d", "1f640", "1f47a", "1f648", "1f649", "1f64a", "1f480", "1f47d", "1f4a9", "1f525", "1f4a5", "1f4a4", "1f442", "1f440", "1f443", "1f445", "1f444", "1f44d", "1f44e", "1f44c", "1f44a", "270c", "270b", "1f450", "1f446", "1f447", "1f449", "1f448", "1f64f", "1f44f", "1f4aa", "1f6b6", "1f3c3", "1f483", "1f46b", "1f46a", "1f46c", "1f46d", "1f485", "1f3a9", "1f451", "1f452", "1f45f", "1f45e", "1f460", "1f455", "1f457", "1f456", "1f459", "1f45c", "1f453", "1f380", "1f484", "1f49b", "1f499", "1f49c", "1f49a", "1f48d", "1f48e", "1f436", "1f43a", "1f431", "1f42d", "1f439", "1f430", "1f438", "1f42f", "1f428", "1f43b", "1f437", "1f42e", "1f417", "1f434", "1f411", "1f418", "1f43c", "1f427", "1f425", "1f414", "1f40d", "1f422", "1f41b", "1f41d", "1f41c", "1f41e", "1f40c", "1f419", "1f41a", "1f41f", "1f42c", "1f40b", "1f410", "1f40a", "1f42b", "1f340", "1f339", "1f33b", "1f341", "1f33e", "1f344", "1f335", "1f334", "1f333", "1f31e", "1f31a", "1f319", "1f30e", "1f30b", "26a1", "2614", "2744", "26c4", "1f300", "1f308", "1f30a", "1f393", "1f386", "1f383", "1f47b", "1f385", "1f384", "1f381", "1f388", "1f52e", "1f3a5", "1f4f7", "1f4bf", "1f4bb", "260e", "1f4e1", "1f4fa", "1f4fb", "1f509", "1f514", "23f3", "23f0", "231a", "1f512", "1f511", "1f50e", "1f4a1", "1f526", "1f50c", "1f50b", "1f6bf", "1f6bd", "1f527", "1f528", "1f6aa", "1f6ac", "1f4a3", "1f52b", "1f52a", "1f48a", "1f489", "1f4b0", "1f4b5", "1f4b3", "2709", "1f4eb", "1f4e6", "1f4c5", "1f4c1", "2702", "1f4cc", "1f4ce", "2712", "270f", "1f4d0", "1f4da", "1f52c", "1f52d", "1f3a8", "1f3ac", "1f3a4", "1f3a7", "1f3b5", "1f3b9", "1f3bb", "1f3ba", "1f3b8", "1f47e", "1f3ae", "1f0cf", "1f3b2", "1f3af", "1f3c8", "1f3c0", "26bd", "26be", "1f3be", "1f3b1", "1f3c9", "1f3b3", "1f3c1", "1f3c7", "1f3c6", "1f3ca", "1f3c4", "2615", "1f37c", "1f37a", "1f377", "1f374", "1f355", "1f354", "1f35f", "1f357", "1f371", "1f35a", "1f35c", "1f361", "1f373", "1f35e", "1f369", "1f366", "1f382", "1f370", "1f36a", "1f36b", "1f36d", "1f36f", "1f34e", "1f34f", "1f34a", "1f34b", "1f352", "1f347", "1f349", "1f353", "1f351", "1f34c", "1f350", "1f34d", "1f346", "1f345", "1f33d", "1f3e1", "1f3e5", "1f3e6", "26ea", "1f3f0", "26fa", "1f3ed", "1f5fb", "1f5fd", "1f3a0", "1f3a1", "26f2", "1f3a2", "1f6a2", "1f6a4", "2693", "1f680", "2708", "1f681", "1f682", "1f68b", "1f68e", "1f68c", "1f699", "1f697", "1f695", "1f69b", "1f6a8", "1f694", "1f692", "1f691", "1f6b2", "1f6a0", "1f69c", "1f6a6", "26a0", "1f6a7", "26fd", "1f3b0", "1f5ff", "1f3aa", "1f3ad", "1f1ef-1f1f5", "1f1f0-1f1f7", "1f1e9-1f1ea", "1f1e8-1f1f3", "1f1fa-1f1f8", "1f1eb-1f1f7", "1f1ea-1f1f8", "1f1ee-1f1f9", "1f1f7-1f1fa", "1f1ec-1f1e7", "0031-20e3", "0032-20e3", "0033-20e3", "0034-20e3", "0035-20e3", "0036-20e3", "0037-20e3", "0038-20e3", "0039-20e3", "0030-20e3", "1f51f", "2757", "2753", "2665", "2666", "1f4af", "1f517", "1f531", "1f534", "1f535", "1f536", "1f537"];
  async function _r(f, n) {
    const o = f.concat(n);
    const s = await it.invokeCrypto("sha256", o);
    const l = [];
    const c = Ce.length;
    for (let T = 0; T != s.length; T += 8) {
      const R = s.slice(T, T + 8);
      const p = kr(R).mod(c).toJSNumber();
      const b = Ce[p];
      l.push(b);
    }
    return l;
  }
  async function Ar(f, n, o) {
    const s = await it.invokeCrypto("mod-pow", f, n, o);
    const c = (await it.invokeCrypto("sha1", s)).slice(-8).reverse();
    const y = (gt(c).greater(er) ? gt(c).minus(ze) : gt(c)).toString(10);
    return {
      key: s,
      key_fingerprint: y
    };
  }
  function Ye(f) {
    if (crypto && "getRandomValues" in crypto) {
      crypto.getRandomValues(f);
    } else {
      throw new Error("NO_SECURE_RANDOM");
    }
    return f;
  }
  function ke(f, n = 16, o, s = false, l = false) {
    const c = f.byteLength || f.length;
    const y = s ? n - c : n - c % n;
    if (y > 0 && y < n) {
      const T = new Uint8Array(y);
      if (o) {
        for (let R = 0; R < y; ++R) {
          T[R] = 0;
        }
      } else {
        Ye(T);
      }
      return f instanceof ArrayBuffer ? (l ? kt(T, f) : kt(f, T)).buffer : f instanceof Uint8Array ? l ? kt(T, f) : kt(f, T) : l ? [...T].concat(f) : f.concat([...T]);
    }
    return f;
  }
  function Re(f) {
    const n = f.length;
    const o = new Uint8Array(Math.ceil(n / 2));
    let s = 0;
    if (n % 2) {
      o[s++] = parseInt(f.charAt(0), 16);
    }
    for (let l = s; l < n; l += 2) {
      o[s++] = parseInt(f.substr(l, 2), 16);
    }
    return o;
  }
  async function Sr(f) {
    const {
      p: n,
      g: o
    } = f;
    const l = (A => {
      for (;;) {
        const p = Ye(new Uint8Array(A.length));
        const b = gt(p);
        if (!b.greater(Y.one)) {
          continue;
        }
        const S = gt(A);
        if (b.lesser(S.subtract(Y.one))) {
          return p;
        }
      }
    })(n);
    const c = Re(o.toString(16));
    const y = ke(await it.invokeCrypto("mod-pow", c, l, n), 256, true, true, true);
    const T = await it.invokeCrypto("sha256", y);
    return {
      a: l,
      g_a: y,
      g_a_hash: T,
      p: n
    };
  }
  function Er(f, n) {
    const o = f.length;
    const s = new Uint8Array(o);
    for (let l = 0; l < o; ++l) {
      s[l] = f[l] ^ n[l];
    }
    return s;
  }
  function _e(f) {
    return f instanceof Uint8Array ? f : typeof f == "string" ? new TextEncoder().encode(f) : new Uint8Array(f);
  }
  function Tr(f) {
    const n = f.length;
    const o = new Array(n);
    for (let s = 0; s < n; ++s) {
      o[s] = (f[s] < 16 ? "0" : "") + (f[s] || 0).toString(16);
    }
    return o.join("");
  }
  async function Br(f, n, o) {
    let s = await it.invokeCrypto("sha256", kt(n, new TextEncoder().encode(f), n));
    s = kt(o, s, o);
    s = await it.invokeCrypto("sha256", s);
    let l = await it.invokeCrypto("pbkdf2", new Uint8Array(s), n, 1e5);
    l = kt(o, l, o);
    s = await it.invokeCrypto("sha256", l);
    return s;
  }
  async function Pr(f, n, o) {
    const s = o ? n.new_algo : n.current_algo;
    const l = gt(s.p);
    const c = Y(s.g);
    const y = await Br(f, s.salt1, s.salt2);
    const T = Y(Tr(y), 16);
    const R = function (et, K) {
      if (!(et instanceof Uint8Array)) {
        et = et instanceof Uint8Array ? et : typeof et == "string" ? new TextEncoder().encode(et) : new Uint8Array(et);
      }
      return ke(et, K, true, true, true);
    };
    const A = c.modPow(T, l);
    const p = et => {
      const K = new Uint8Array(et.length);
      for (let tt = 0; tt < et.length; tt += 4) {
        K[tt] = et[tt + 3];
        K[tt + 1] = et[tt + 2];
        K[tt + 2] = et[tt + 1];
        K[tt + 3] = et[tt];
      }
      return K;
    };
    if (o) {
      const et = new Uint8Array(A.toArray(256).value);
      return R(et, 256);
    }
    const b = gt(n.srp_B);
    const S = R(new Uint8Array(l.toArray(256).value), 256);
    const O = R(new Uint8Array(c.toArray(256).value), 256);
    const nt = R(new Uint8Array(b.toArray(256).value), 256);
    const ut = await it.invokeCrypto("sha256", kt(S, O));
    const yt = gt(ut).multiply(A).mod(l);
    const at = (et, K) => {
      const tt = K.subtract(et);
      return !(tt.isNegative() || tt.bitLength().toJSNumber() < 1984 || et.bitLength().toJSNumber() < 1984 || Math.floor((et.bitLength().toJSNumber() + 7) / 8) > 256);
    };
    const Ht = async () => {
      for (;;) {
        const et = gt(p(n.secure_random));
        const K = c.modPow(et, l);
        if (at(K, l)) {
          const tt = new Uint8Array(K.toArray(256).value);
          const dt = await it.invokeCrypto("sha256", kt(tt, nt));
          const ct = gt(dt);
          if (!ct.isZero() && !ct.isNegative()) {
            return {
              a: et,
              a_for_hash: tt,
              u: ct
            };
          }
        }
      }
    };
    const {
      a: Tt,
      a_for_hash: ot,
      u: At
    } = await Ht();
    let St;
    if (b.greater(yt)) {
      St = b;
    } else {
      St = b.add(l);
    }
    St = St.subtract(yt).mod(l);
    const Mt = At.multiply(T);
    const Ut = Tt.add(Mt);
    const wt = St.modPow(Ut, l);
    const Bt = await it.invokeCrypto("sha256", R(new Uint8Array(wt.toArray(256).value), 256));
    let st = await it.invokeCrypto("sha256", S);
    const Nt = await it.invokeCrypto("sha256", O);
    st = Er(st, Nt);
    const Ot = kt(st, await it.invokeCrypto("sha256", s.salt1), await it.invokeCrypto("sha256", s.salt2), ot, nt, Bt);
    const Pt = await it.invokeCrypto("sha256", Ot);
    return {
      _: "inputCheckPasswordSRP",
      srp_id: n.srp_id,
      A: new Uint8Array(ot),
      M1: Pt
    };
  }
  var vt = new Uint8Array(256);
  var ee = new Uint8Array(256);
  var re = new Uint32Array(256);
  var ne = new Uint32Array(256);
  var ie = new Uint32Array(256);
  var oe = new Uint32Array(256);
  var jt = new Uint32Array(256);
  var Vt = new Uint32Array(256);
  var Xt = new Uint32Array(256);
  var Yt = new Uint32Array(256);
  function xr() {
    var f = new Uint8Array(256);
    var n = new Uint8Array(256);
    var o;
    var s;
    var l;
    var c;
    var y;
    var T;
    var R = 0;
    var A = 0;
    for (var p = 0; p < 256; p++) {
      f[p] = p << 1 ^ (p >> 7) * 283;
      n[f[p] ^ p] = p;
    }
    for (; !vt[R]; R ^= o || 1) {
      c = A ^ A << 1 ^ A << 2 ^ A << 3 ^ A << 4;
      c = c >> 8 ^ c & 255 ^ 99;
      vt[R] = c;
      ee[c] = R;
      l = f[s = f[o = f[R]]];
      T = l * 16843009 ^ s * 65537 ^ o * 257 ^ R * 16843008;
      y = f[c] * 257 ^ c * 16843008;
      re[R] = y = y << 24 ^ y >>> 8;
      ne[R] = y = y << 24 ^ y >>> 8;
      ie[R] = y = y << 24 ^ y >>> 8;
      oe[R] = y = y << 24 ^ y >>> 8;
      jt[c] = T = T << 24 ^ T >>> 8;
      Vt[c] = T = T << 24 ^ T >>> 8;
      Xt[c] = T = T << 24 ^ T >>> 8;
      Yt[c] = T = T << 24 ^ T >>> 8;
      A = n[A] || 1;
    }
  }
  function Ir(f, n) {
    return f.charCodeAt(n) << 24 ^ f.charCodeAt(n + 1) << 16 ^ f.charCodeAt(n + 2) << 8 ^ f.charCodeAt(n + 3);
  }
  function Kt(f) {
    if (f instanceof Uint32Array) {
      return f;
    }
    if (typeof f == "string") {
      if (f.length % 4 !== 0) {
        for (var n = f.length % 4; n <= 4; n++) {
          f += "\0x00";
        }
      }
      var o = new Uint32Array(f.length / 4);
      for (var n = 0; n < f.length; n += 4) {
        o[n / 4] = f.charCodeAt(n) << 24 ^ f.charCodeAt(n + 1) << 16 ^ f.charCodeAt(n + 2) << 8 ^ f.charCodeAt(n + 3);
      }
      return o;
    }
    if (f instanceof Uint8Array) {
      var o = new Uint32Array(f.length / 4);
      for (var n = 0; n < f.length; n += 4) {
        o[n / 4] = f[n] << 24 ^ f[n + 1] << 16 ^ f[n + 2] << 8 ^ f[n + 3];
      }
      return o;
    }
    throw new Error("Unable to create 32-bit words");
  }
  function we(f, n, o) {
    if (o === undefined) {
      o = f;
    }
    for (var s = 0; s < f.length; s++) {
      o[s] = f[s] ^ n[s];
    }
  }
  xr();
  var Rr = function () {
    function f(n) {
      var o = Kt(n);
      if (o.length !== 4 && o.length !== 6 && o.length !== 8) {
        throw new Error("Invalid key size");
      }
      this.encKey = new Uint32Array(4 * o.length + 28);
      this.decKey = new Uint32Array(4 * o.length + 28);
      this.encKey.set(o);
      var s = 1;
      var l = o.length;
      for (var c; l < 4 * o.length + 28; l++) {
        c = this.encKey[l - 1];
        if (l % o.length === 0 || o.length === 8 && l % o.length === 4) {
          c = vt[c >>> 24] << 24 ^ vt[c >> 16 & 255] << 16 ^ vt[c >> 8 & 255] << 8 ^ vt[c & 255];
          if (l % o.length === 0) {
            c = c << 8 ^ c >>> 24 ^ s << 24;
            s = s << 1 ^ (s >> 7) * 283;
          }
        }
        this.encKey[l] = this.encKey[l - o.length] ^ c;
      }
      for (var y = 0; l; y++, l--) {
        c = this.encKey[y & 3 ? l : l - 4];
        if (l <= 4 || y < 4) {
          this.decKey[y] = c;
        } else {
          this.decKey[y] = jt[vt[c >>> 24]] ^ Vt[vt[c >> 16 & 255]] ^ Xt[vt[c >> 8 & 255]] ^ Yt[vt[c & 255]];
        }
      }
    }
    f.prototype.encrypt = function (n) {
      var o = Kt(n);
      var s = new Uint32Array(4);
      var l = o[0] ^ this.encKey[0];
      var c = o[1] ^ this.encKey[1];
      var y = o[2] ^ this.encKey[2];
      var T = o[3] ^ this.encKey[3];
      var R = this.encKey.length / 4 - 2;
      var A = 4;
      var p;
      var b;
      var S;
      for (var O = 0; O < R; O++) {
        p = re[l >>> 24] ^ ne[c >> 16 & 255] ^ ie[y >> 8 & 255] ^ oe[T & 255] ^ this.encKey[A];
        b = re[c >>> 24] ^ ne[y >> 16 & 255] ^ ie[T >> 8 & 255] ^ oe[l & 255] ^ this.encKey[A + 1];
        S = re[y >>> 24] ^ ne[T >> 16 & 255] ^ ie[l >> 8 & 255] ^ oe[c & 255] ^ this.encKey[A + 2];
        T = re[T >>> 24] ^ ne[l >> 16 & 255] ^ ie[c >> 8 & 255] ^ oe[y & 255] ^ this.encKey[A + 3];
        l = p;
        c = b;
        y = S;
        A += 4;
      }
      for (var O = 0; O < 4; O++) {
        s[O] = vt[l >>> 24] << 24 ^ vt[c >> 16 & 255] << 16 ^ vt[y >> 8 & 255] << 8 ^ vt[T & 255] ^ this.encKey[A++];
        p = l;
        l = c;
        c = y;
        y = T;
        T = p;
      }
      return s;
    };
    f.prototype.decrypt = function (n) {
      var o = Kt(n);
      var s = new Uint32Array(4);
      var l = o[0] ^ this.decKey[0];
      var c = o[3] ^ this.decKey[1];
      var y = o[2] ^ this.decKey[2];
      var T = o[1] ^ this.decKey[3];
      var R = this.decKey.length / 4 - 2;
      var A;
      var p;
      var b;
      var S = 4;
      for (var O = 0; O < R; O++) {
        A = jt[l >>> 24] ^ Vt[c >> 16 & 255] ^ Xt[y >> 8 & 255] ^ Yt[T & 255] ^ this.decKey[S];
        p = jt[c >>> 24] ^ Vt[y >> 16 & 255] ^ Xt[T >> 8 & 255] ^ Yt[l & 255] ^ this.decKey[S + 1];
        b = jt[y >>> 24] ^ Vt[T >> 16 & 255] ^ Xt[l >> 8 & 255] ^ Yt[c & 255] ^ this.decKey[S + 2];
        T = jt[T >>> 24] ^ Vt[l >> 16 & 255] ^ Xt[c >> 8 & 255] ^ Yt[y & 255] ^ this.decKey[S + 3];
        l = A;
        c = p;
        y = b;
        S += 4;
      }
      for (var O = 0; O < 4; O++) {
        s[3 & -O] = ee[l >>> 24] << 24 ^ ee[c >> 16 & 255] << 16 ^ ee[y >> 8 & 255] << 8 ^ ee[T & 255] ^ this.decKey[S++];
        A = l;
        l = c;
        c = y;
        y = T;
        T = A;
      }
      return s;
    };
    return f;
  }();
  var Mr = function () {
    function f(n, o, s) {
      if (s === undefined) {
        s = 16;
      }
      this.key = Kt(n);
      this.iv = Kt(o);
      this.cipher = new Rr(n);
      this.blockSize = s / 4;
    }
    f.prototype.encrypt = function (n, o) {
      var s = Kt(n);
      var l = o || new Uint32Array(s.length);
      var c = this.iv.subarray(this.blockSize, this.iv.length);
      var y = this.iv.subarray(0, this.blockSize);
      var T = new Uint32Array(this.blockSize);
      for (var R = 0; R < s.length; R += this.blockSize) {
        var A = s.subarray(R, R + this.blockSize);
        we(A, y, T);
        var p = this.cipher.encrypt(T);
        we(p, c);
        c = A;
        y = p;
        var b = R;
        for (var S = 0; b < s.length && S < 4; b++, S++) {
          l[b] = p[S];
        }
      }
      return l;
    };
    f.prototype.decrypt = function (n, o) {
      var s = Kt(n);
      var l = o || new Uint32Array(s.length);
      var c = this.iv.subarray(this.blockSize, this.iv.length);
      var y = this.iv.subarray(0, this.blockSize);
      var T = new Uint32Array(this.blockSize);
      for (var R = 0; R < l.length; R += this.blockSize) {
        var A = s.subarray(R, R + this.blockSize);
        we(A, c, T);
        var p = this.cipher.decrypt(T);
        we(p, y);
        y = A;
        c = p;
        var b = R;
        for (var S = 0; b < l.length && S < 4; b++, S++) {
          l[b] = p[S];
        }
      }
      return l;
    };
    return f;
  }();
  function Ur(f) {
    const n = new Uint8Array(f.byteLength);
    let o = 0;
    for (let s = f.length * 4; o < s; ++o) {
      n[o] = f[o >>> 2] >>> 24 - o % 4 * 8 & 255;
    }
    return n;
  }
  function xe(f) {
    const n = f instanceof Uint8Array ? f : typeof f == "string" ? new TextEncoder().encode(f) : new Uint8Array(f);
    const o = [];
    let s = 0;
    for (let l = n.length; s < l; ++s) {
      o[s >>> 2] |= n[s] << 24 - s % 4 * 8;
    }
    return new Uint32Array(o);
  }
  function Qe(f, n, o, s = true) {
    const c = new Mr(xe(n), xe(o))[s ? "encrypt" : "decrypt"](xe(f));
    return Ur(c);
  }
  function Or(f, n, o) {
    return Qe(ke(f), n, o, true);
  }
  function Lr(f, n, o) {
    return Qe(f, n, o, false);
  }
  const Nr = {
    8: new Uint8Array(1),
    16: new Uint16Array(1),
    32: new Uint32Array(1)
  };
  function Cr(f) {
    const n = Nr[f];
    crypto.getRandomValues(n);
    return n[0];
  }
  function qe(f, n) {
    return Y.randBetween(f, n, () => Cr(32) / 4294967295);
  }
  function Ze(f) {
    const n = Y[2];
    if (f.remainder(n).isZero()) {
      return n;
    }
    const o = Y(1e3);
    let s;
    let l;
    let c;
    let y;
    let T;
    let R;
    let A;
    do {
      s = qe(Y.one, f.minus(1));
    } while (s.isZero() || s.eq(f.minus(n)));
    c = qe(Y.one, f.minus(1));
    T = Y.one;
    R = Y.one;
    const b = Y("FFFFFFFFFFFFFFFF", 16).minus(f).plus(1);
    const S = O => (O = O.pow(n).mod(f), O = O.add(s), O.lesser(s) && (O = O.add(b)), O = O.mod(f), O);
    do {
      l = c;
      for (let nt = 0; Y(nt).lesser(T); ++nt) {
        c = S(c);
      }
      let O = Y.zero;
      do {
        y = c;
        const nt = Y.min(o, T.minus(O));
        for (let ut = 0; Y(ut).lesser(nt); ++ut) {
          c = S(c);
          R = R.multiply(l.greater(c) ? l.minus(c) : c.minus(l)).mod(f);
        }
        A = Y.gcd(R, f);
        O = O.add(o);
      } while (O.lesser(T) && A.eq(Y.one));
      T = T.shiftLeft(Y.one);
    } while (A.eq(Y.one));
    if (A.eq(f)) {
      do {
        y = S(y);
        A = Y.gcd(l.minus(y).abs(), f);
      } while (A.eq(Y.one));
    }
    return A;
  }
  function qr(f) {
    const n = gt(f);
    const o = [];
    const s = [];
    let l = Ze(n);
    o.push(n.divide(l));
    o.push(l);
    do {
      const c = o.pop();
      if (!c.eq(Y.one)) {
        if (c.isPrime(true)) {
          s.push(c);
          for (let y = 0; y < o.length; ++y) {
            let T = o[y];
            if (T.mod(c).isZero()) {
              do {
                T = T.divide(c);
              } while (T.mod(c).isZero());
              o[y] = T;
            }
          }
        } else {
          l = Ze(c);
          o.push(c.divide(l));
          o.push(l);
        }
      }
    } while (o.length);
    return s;
  }
  function Zr(f) {
    let n = qr(f);
    n.sort((l, c) => l.compare(c));
    if (n.length > 2) {
      n = [n.splice(n.length - 2, 1)[0], n.reduce((l, c) => l.multiply(c), Y.one)];
    }
    const o = n[0];
    const s = n[n.length - 1];
    return (o.lesser(s) ? [o, s] : [s, o]).map(l => new Uint8Array(l.toArray(256).value));
  }
  const Qt = typeof window < "u" && "crypto" in window ? window.crypto.subtle : self.crypto.subtle;
  async function Dr(f, n, o) {
    const s = await Qt.importKey("raw", f, {
      name: "PBKDF2"
    }, false, ["deriveBits"]);
    return Qt.deriveBits({
      name: "PBKDF2",
      salt: n,
      iterations: o,
      hash: {
        name: "SHA-512"
      }
    }, s, 512).then(c => new Uint8Array(c));
  }
  function Fr(f, n) {
    return He(f, Re(n.exponent), Re(n.modulus));
  }
  function Kr(f) {
    return Qt.digest("SHA-1", f instanceof Uint8Array ? f : typeof f == "string" ? new TextEncoder().encode(f) : new Uint8Array(f)).then(n => new Uint8Array(n));
  }
  function zr(f) {
    return Qt.digest("SHA-256", f instanceof Uint8Array ? f : typeof f == "string" ? new TextEncoder().encode(f) : new Uint8Array(f)).then(n => new Uint8Array(n));
  }
  class De {
    constructor(n, o, s) {
      this.mode = n;
      this.cryptoKey = o;
      this.queue = [];
      this.counter = gt(s);
    }
    async update(n) {
      return new Promise(o => {
        this.queue.push({
          data: n,
          resolve: o
        });
        this.release();
      });
    }
    async release() {
      if (!this.releasing) {
        for (this.releasing = true; this.queue.length;) {
          const {
            data: n,
            resolve: o
          } = this.queue.shift();
          o(await this._update(n));
        }
        this.releasing = false;
      }
    }
    async perform(n) {
      return await Qt[this.mode]({
        name: "AES-CTR",
        counter: ke(new Uint8Array(this.counter.toArray(256).value), 16, true, true, true),
        length: 128
      }, this.cryptoKey, n);
    }
    async _update(n) {
      let o = n;
      let s;
      if (this.leftLength) {
        const A = this.leftLength;
        const p = 16 - A;
        const b = new Uint8Array(A).concat(o.slice(0, p));
        const S = await this.perform(b);
        s = new Uint8Array(S.slice(A));
        o = o.slice(p);
        this.counter = this.counter.add(1);
      }
      const l = new Uint8Array(await this.perform(o));
      const c = s ? s.concat(l) : l;
      let y = o.length;
      const T = y % 16;
      y -= T;
      const R = y / 16;
      this.counter = this.counter.add(R);
      this.leftLength = T || undefined;
      return c;
    }
  }
  const Ue = new Map();
  let Hr = -1;
  async function Wr({
    encKey: f,
    encIv: n,
    decKey: o,
    decIv: s
  }) {
    const l = ++Hr;
    const y = [["encrypt", f], ["decrypt", o]].map(([S, O]) => Qt.importKey("raw", O, {
      name: "AES-CTR"
    }, false, [S]));
    const [T, R] = await Promise.all(y);
    const A = new De("encrypt", T, n.slice());
    const p = new De("decrypt", R, s.slice());
    const b = {
      enc: A,
      dec: p
    };
    Ue.set(l, b);
    return l;
  }
  async function Gr({
    id: f,
    data: n,
    operation: o
  }) {
    const s = Ue.get(f);
    return await (o === "encrypt" ? s.enc : s.dec).update(n);
  }
  function Jr(f) {
    Ue.delete(f);
  }
  console.log("CryptoWorker start");
  const jr = {
    sha1: Kr,
    sha256: zr,
    pbkdf2: Dr,
    "aes-encrypt": Or,
    "aes-decrypt": Lr,
    "rsa-encrypt": Fr,
    factorize: Zr,
    "mod-pow": He,
    gzipUncompress: or,
    computeSRP: Pr,
    "generate-dh": Sr,
    "compute-dh-key": Ar,
    "get-emojis-fingerprint": _r,
    "aes-ctr-prepare": Wr,
    "aes-ctr-process": Gr,
    "aes-ctr-destroy": Jr
  };
  it.addMultipleEventsListeners({
    invoke: ({
      method: f,
      args: n
    }) => jr[f](...n),
    terminate: () => {
      Ft.close();
    }
  });
  if (typeof MessageChannel < "u") {
    sr(it, f => {
      const n = new MessageChannel();
      it.attachPort(n.port1);
      it.invokeVoid("port", undefined, f, [n.port2]);
    });
  } //# sourceMappingURL=crypto.worker-CfCshcpI.js.map
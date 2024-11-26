const __vite__fileDeps = ["./pageSignIn-CZbpF0sM.js", "./index-BkeszwBR.js", "./index-CAoGqTOW.css", "./putPreloader-Cv2t4Au7.js", "./page-Cb6VgJQc.js", "./countryInputField-DDW8Y_ns.js", "./button-BA7QFg1K.js", "./wrapEmojiText-ENB-q-2z.js", "./scrollable-DwOU1mFr.js", "./textToSvgURL-Cnw_Q8Rw.js", "./qr-code-styling-CvBVNv73.js", "./_commonjsHelpers-Cpj98o6Y.js", "./pageIm-BYgeW8u4.js", "./pagePassword-g7_rDf4w.js", "./htmlToSpan-I3MLtOmv.js", "./loginPage-1Lgo7M2U.js"];
const __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
import { f as d, l as Q, a as l, e as V, d as $, i as F, _ as y, A as P, p as C } from "./index-BkeszwBR.js";
import { a as z, P as H } from "./page-Cb6VgJQc.js";
import { B as R } from "./button-BA7QFg1K.js";
import { p as O } from "./putPreloader-Cv2t4Au7.js";
import { b as N, t as j } from "./textToSvgURL-Cnw_Q8Rw.js";
let T = false;
function W() {
  return S || (S = l.managers.apiManager.getConfig().then(e => e.suggested_lang_code !== d.lastRequestedLangCode ? Promise.all([e, d.getStrings(e.suggested_lang_code, ["Login.ContinueOnLanguage"]), d.getCacheLangPack()]) : []));
}
let S;
function G(e) {
  if (!T) {
    W().then(([a, c]) => {
      if (!a) {
        return;
      }
      const s = [];
      c.forEach(i => {
        const g = d.strings.get(i.key);
        if (g) {
          s.push(g);
          d.strings.set(i.key, i);
        }
      });
      const r = R("btn-primary btn-secondary btn-primary-transparent primary", {
        text: "Login.ContinueOnLanguage"
      });
      r.lastElementChild.classList.remove("i18n");
      Q({
        text: [d.format("Login.ContinueOnLanguage", true)]
      }).then(() => {
        window.requestAnimationFrame(() => {
          e.append(r);
        });
      });
      l.addEventListener("language_change", () => {
        r.remove();
      }, {
        once: true
      });
      s.forEach(i => {
        d.strings.set(i.key, i);
      });
      z(r, i => {
        V(i);
        T = true;
        r.disabled = true;
        O(r);
        d.getLangPack(a.suggested_lang_code);
      });
    });
  }
}
function J(e, a) {
  return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=+$/, "");
}
function K(e) {
  let a;
  let c = "";
  let s = e.length;
  let o = 0;
  for (let r = 0; r < s; ++r) {
    a = r % 3;
    o |= e[r] << (16 >>> a & 24);
    if (a === 2 || s - r === 1) {
      c += String.fromCharCode((o >>> 18 & 63) < 26 ? (o >>> 18 & 63) + 65 : (o >>> 18 & 63) < 52 ? (o >>> 18 & 63) + 71 : (o >>> 18 & 63) < 62 ? (o >>> 18 & 63) - 4 : (o >>> 18 & 63) === 62 ? 43 : (o >>> 18 & 63) === 63 ? 47 : 65, (o >>> 12 & 63) < 26 ? (o >>> 12 & 63) + 65 : (o >>> 12 & 63) < 52 ? (o >>> 12 & 63) + 71 : (o >>> 12 & 63) < 62 ? (o >>> 12 & 63) - 4 : (o >>> 12 & 63) === 62 ? 43 : (o >>> 12 & 63) === 63 ? 47 : 65, (o >>> 6 & 63) < 26 ? (o >>> 6 & 63) + 65 : (o >>> 6 & 63) < 52 ? (o >>> 6 & 63) + 71 : (o >>> 6 & 63) < 62 ? (o >>> 6 & 63) - 4 : (o >>> 6 & 63) === 62 ? 43 : (o >>> 6 & 63) === 63 ? 47 : 65, (o & 63) < 26 ? (o & 63) + 65 : (o & 63) < 52 ? (o & 63) + 71 : (o & 63) < 62 ? (o & 63) - 4 : (o & 63) === 62 ? 43 : (o & 63) === 63 ? 47 : 65);
      o = 0;
    }
  }
  return c.replace(/A(?=A$|$)/g, "=");
}
function E(e) {
  return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
}
const X = async () => {
  const a = A.pageEl.querySelector(".auth-image");
  let c = O(a, true);
  const s = document.createElement("div");
  s.classList.add("input-wrapper");
  const o = R("btn-primary btn-secondary btn-primary-transparent primary", {
    text: "Login.QR.Cancel"
  });
  s.append(o);
  G(s);
  const r = a.parentElement;
  const i = document.createElement("h4");
  $(i, "Login.QR.Title");
  const g = document.createElement("ol");
  g.classList.add("qr-description");
  ["Login.QR.Help1", "Login.QR.Help2", "Login.QR.Help3"].forEach(u => {
    const t = document.createElement("li");
    t.append(F(u));
    g.append(t);
  });
  r.append(i, g, s);
  o.addEventListener("click", () => {
    y(() => import("./pageSignIn-CZbpF0sM.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), import.meta.url).then(u => u.default.mount());
    m = true;
  });
  const x = (await Promise.all([y(() => import("./qr-code-styling-CvBVNv73.js").then(u => u.q), __vite__mapDeps([10, 11]), import.meta.url)]))[0].default;
  let m = false;
  l.addEventListener("user_auth", () => {
    m = true;
    h = null;
  }, {
    once: true
  });
  const L = {
    ignoreErrors: true
  };
  let k;
  const I = async u => {
    try {
      let t = await l.managers.apiManager.invokeApi("auth.exportLoginToken", {
        api_id: P.id,
        api_hash: P.hash,
        except_ids: []
      }, {
        ignoreErrors: true
      });
      if (t._ === "auth.loginTokenMigrateTo") {
        if (!L.dcId) {
          L.dcId = t.dc_id;
          l.managers.apiManager.setBaseDcId(t.dc_id);
        }
        t = await l.managers.apiManager.invokeApi("auth.importLoginToken", {
          token: t.token
        }, L);
      }
      if (t._ === "auth.loginTokenSuccess") {
        const p = t.authorization;
        await l.managers.apiManager.setUser(p.user);
        y(() => import("./pageIm-BYgeW8u4.js").then(z => z.postEvent(JSON.stringify({
          state: p,
          localStorage
        })))).then(f => f.default.mount());
        return true;
      }
      if (!k || !N(k, t.token)) {
        k = t.token;
        const p = K(t.token);
        const f = "tg://login?token=" + p.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=+$/, "");
        const w = window.getComputedStyle(document.documentElement);
        const q = w.getPropertyValue("--surface-color").trim();
        const B = w.getPropertyValue("--primary-text-color").trim();
        const D = w.getPropertyValue("--primary-color").trim();
        const M = await fetch("assets/img/logo_padded.svg").then(n => n.text()).then(n => (n = n.replace(/(fill:).+?(;)/, `$1${D}$2`), j(n)));
        const _ = new x({
          width: 240 * window.devicePixelRatio,
          height: 240 * window.devicePixelRatio,
          data: f,
          image: M,
          dotsOptions: {
            color: B,
            type: "rounded"
          },
          cornersSquareOptions: {
            type: "extra-rounded"
          },
          imageOptions: {
            imageSize: 1,
            margin: 0
          },
          backgroundOptions: {
            color: q
          },
          qrOptions: {
            errorCorrectionLevel: "L"
          }
        });
        _.append(a);
        a.lastChild.classList.add("qr-canvas");
        let v;
        if (_._drawingPromise) {
          v = _._drawingPromise;
        } else {
          v = Promise.race([C(1e3), new Promise(n => {
            _._canvas._image.addEventListener("load", () => {
              window.requestAnimationFrame(() => n());
            }, {
              once: true
            });
          })]);
        }
        await v.then(() => {
          if (c) {
            c.style.animation = "hide-icon .4s forwards";
            const n = a.children[1];
            n.style.display = "none";
            n.style.animation = "grow-icon .4s forwards";
            setTimeout(() => {
              n.style.display = "";
            }, 150);
            setTimeout(() => {
              n.style.animation = "";
            }, 500);
            c = undefined;
          } else {
            Array.from(a.children).slice(0, -1).forEach(n => {
              n.remove();
            });
          }
        });
      }
      if (u) {
        const p = Date.now() / 1e3;
        const f = t.expires - p - (await l.managers.timeManager.getServerTimeOffset());
        await C(f > 3 ? 3000 : 1e3 * f | 0);
      }
    } catch (t) {
      switch (t.type) {
        case "SESSION_PASSWORD_NEEDED":
          t.handled = true;
          y(() => import("./pagePassword-g7_rDf4w.js"), __vite__mapDeps([13, 1, 2, 3, 4, 6, 14, 7, 15]), import.meta.url).then(p => p.default.mount());
          m = true;
          h = null;
          break;
        default:
          console.error("pageSignQR: default error:", t);
          m = true;
          break;
      }
      return true;
    }
    return false;
  };
  return async () => {
    m = false;
    do {
      if (m || (await I(true))) {
        break;
      }
    } while (true);
  };
};
let h;
const A = new H("page-signQR", true, () => h, () => {
  if (!h) {
    h = X();
  }
  h.then(e => {
    e();
  });
  l.managers.appStateManager.pushToState("authState", {
    _: "authStateSignQr"
  });
});
const re = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: A
}, Symbol.toStringTag, {
  value: "Module"
}));
export { re as a, G as g, A as p };
//# sourceMappingURL=pageSignQR-BnxgjuIJ.js.map
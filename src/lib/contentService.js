// Servicio de contenido editable — usa localStorage para persistir cambios
// Más adelante puedes conectarlo a Supabase

const STORAGE_KEY = 'site_content_090';

const defaultContent = {
  foods: [
    { id: 1, name: 'Pachamanca de Chancho', image: '' },
    { id: 2, name: 'Trucha Frita', image: '' },
    { id: 3, name: 'Mazamorra de Chuñusca', image: '' },
    { id: 4, name: 'Picarones', image: '' },
  ],
  prizes: {
    varones: [
      { id: 1, pos: '1°', label: 'Primer Puesto', prize: 'Un Chancho', image: '' },
      { id: 2, pos: '2°', label: 'Segundo Puesto', prize: 'Una Oveja Soltera', image: '' },
    ],
    mujeres: [
      { id: 1, pos: '1°', label: 'Primer Puesto', prize: 'Una Oveja', image: '' },
      { id: 2, pos: '2°', label: 'Segundo Puesto', prize: 'Un Gallo Madrugador', image: '' },
    ],
  },
};

export function getContent() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...defaultContent, ...JSON.parse(stored) };
  } catch (e) { /* ignore */ }
  return defaultContent;
}

export function saveContent(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetContent() {
  localStorage.removeItem(STORAGE_KEY);
  return defaultContent;
}

from pathlib import Path
p=Path('src/components/AccordionGallery.jsx')
s=p.read_text(encoding='utf-8-sig')
a=s.index('const DEFAULT_ITEMS = [');b=s.index('const AccordionGallery',a)
s=s[:a]+s[b:]
s=s.replace('items = DEFAULT_ITEMS','items = []').replace("className = ''\n", "className = '',\n  onSelect\n")
s=s.replace("  const vertical = orientation === 'vertical';", "  const [narrow, setNarrow] = useState(() => window.matchMedia('(max-width: 700px)').matches);\n  const [prefersReduced, setPrefersReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);\n  useEffect(() => {\n    const small = window.matchMedia('(max-width: 700px)');\n    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');\n    const update = () => { setNarrow(small.matches); setPrefersReduced(reduce.matches); };\n    update(); small.addEventListener('change', update); reduce.addEventListener('change', update);\n    return () => { small.removeEventListener('change', update); reduce.removeEventListener('change', update); };\n  }, []);\n  const vertical = orientation === 'vertical' || narrow;")
a=s.index('  const prefersReduced =\n');b=s.index('  const applyLayout',a)
s=s[:a]+s[b:]
s=s.replace('flexGrow: isActive ? grow : 1, ...rotProp', "flexGrow: isActive ? grow : 1, '--ag-dim': isActive ? 0 : 0.2, ...rotProp")
s=s.replace("      setActive(i);\n    }\n  };\n\n  const handleKeyDown", "      setActive(i);\n    } else {\n      onSelect?.(items[i], e.currentTarget);\n    }\n  };\n\n  const handleKeyDown")
s=s.replace('setActive((i + 1) % count);','panelRefs.current[(i + 1) % count]?.focus();').replace('setActive((i - 1 + count) % count);','panelRefs.current[(i - 1 + count) % count]?.focus();')
s=s.replace('height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`', 'height: vertical ? `680px` : `${height}px`')
s=s.replace('role="list"','role="group"').replace('aria-label="Image accordion gallery"','aria-label="AI 图片作品折叠画廊"')
s=s.replace("const Tag = item.link ? 'a' : 'div';", "const Tag = 'button';")
s=s.replace('href={item.link || undefined}', 'type="button"')
s=s.replace('            role="listitem"\n','')
s=s.replace('aria-label={item.label}', 'aria-label={`查看${item.label}详情`}\n            aria-expanded={isActive}')
s=s.replace('<img src={item.image}', '<img loading="lazy" src={item.image}')
s=s.replace('{item.label}\n                </span>', '{item.label}<small>{item.type} · 点击查看完整作品 ↗</small>\n                </span>')
p.write_text(s,encoding='utf-8')
p=Path('src/components/AccordionGallery.css');s=p.read_text(encoding='utf-8-sig')
a=s.index('@media (max-width: 520px)');b=s.index('@media (prefers-reduced-motion',a)
s=s[:a]+s[b:]
s+='\n.ag-panel { border:0; padding:0; text-align:left; font:inherit; transition:none; }\n.ag-panel__text small { display:block; font-size:11px; font-weight:400; margin-top:9px; letter-spacing:0; }\n@media(max-width:700px){ .accordion-gallery{perspective:none} .ag-panel{transform:none!important} .ag-panel__label{left:16px;bottom:16px;right:16px} .ag-panel__text{font-size:16px} .ag-panel__text small{font-size:10px} }\n'
p.write_text(s,encoding='utf-8')
p=Path('src/components/WorkGallery.jsx');s=p.read_text(encoding='utf-8-sig')
s=s.replace("import { works } from '../works'", "import { works } from '../works'\nimport AccordionGallery from './AccordionGallery'")
a=s.index('    <div className="still-grid">');b=s.index('\n    <dialog',a)
s=s[:a]+'''    <AccordionGallery items={works.filter(work=>work.kind==='image').map(work=>({image:work.cover,label:work.title,alt:work.description,type:work.type,work}))} defaultIndex={2} height={500} radius={12} gap={12} expandRatio={0.56} grayscale={false} tilt={4} accentColor="#ffae82" onSelect={(item,trigger)=>open(item.work,trigger)}/>
'''+s[b:]
p.write_text(s,encoding='utf-8')

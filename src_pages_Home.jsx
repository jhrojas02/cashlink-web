import React from 'react';

const gold = '#F4C17A';

const features = [
  {
    icon: '💳',
    title: 'Cajeros escasos y costosos',
    desc: 'Los usuarios dependen de cajeros automáticos o corresponsales bancarios, limitando el acceso a efectivo en zonas rurales.',
  },
  {
    icon: '💸',
    title: 'Dificultad para retirar efectivo',
    desc: 'Las billeteras digitales no ofrecen retiros de dinero en efectivo o acceso fuera del sistema digital.',
  },
  {
    icon: '🏪',
    title: 'Comercios con liquidez insuficiente',
    desc: 'Pequeños comercios necesitan ofrecer retiros, pero enfrentan dificultades en administración y seguros de intermediación.',
  },
];

const solution = [
  {
    icon: '🛒',
    title: 'Puntos de cambio seguros',
    desc: [
      'Convenios con cafés, farmacias y universidades',
      'Centros comerciales y estaciones de servicio',
      'Coworking y espacios colaborativos',
      'Validación en tiempo real',
    ],
  },
  {
    icon: '🤝',
    title: 'Red Amiga',
    desc: [
      'Trust Score dinámico personalizado',
      'Grupos cerrados de confianza',
      'Validación de identidad segura',
      'Historial de transacciones',
    ],
  },
  {
    icon: '💬',
    title: 'Chat comunitario anónimo',
    desc: [
      'Publicaciones anónimas de necesidades',
      'Visible solo para tu comunidad',
      'Sistema de contacto seguro',
      'Moderación automática',
    ],
  },
  {
    icon: '📍',
    title: 'Sistema de Vecinos Cercanos',
    desc: [
      'Acceso con personas cercanas geográficamente',
      'Red geolocalizada personalizada',
      'Geolocalización en tiempo real',
      'Trust Score global',
    ],
  },
];

const walletFeatures = [
  { title: 'Transferencias instantáneas', desc: 'Recibe, guarda y transfiere dinero digital de forma inmediata entre usuarios.' },
  { title: 'Pagos con QR y POS virtual', desc: 'Paga en comercios usando códigos QR o nuestro sistema de POS virtual.' },
  { title: 'Envío y recepción', desc: 'Transfiere entre usuarios de forma rápida y segura.' },
  { title: 'Microcréditos', desc: 'Accede a microcréditos de bajo monto como solución rápida de liquidez.' },
  { title: 'Ahorro digital', desc: 'Herramientas de ahorro digital y analítica detallada de gastos.' },
  { title: 'Validación biométrica', desc: 'Seguridad avanzada con validación biométrica y proceso KYC completo.' },
];

const security = [
  { title: 'Escrow digital', desc: 'Sistema de garantía y respaldo dinámico, minimizando riesgos en transacciones.' },
  { title: 'Geolocalización', desc: 'Seguimiento en tiempo real para las transacciones, aumentando seguridad.' },
  { title: 'Ubicación compartida', desc: 'Opción de compartir ubicación con contactos de confianza.' },
  { title: 'Póliza de respaldo', desc: 'Cobertura en caso de robo comprobado y verificado.' },
];

const commerce = [
  {
    icon: '💰',
    title: 'Comisiones por intercambio',
    desc: 'Gana como comercio cada vez que una transacción realizada es establecida.',
  },
  {
    icon: '📈',
    title: 'Mayor tráfico',
    desc: 'Atrae más clientes que buscan puntos de intercambio cercanos.',
  },
  {
    icon: '🖥️',
    title: 'Digitalización',
    desc: 'Recibe dinero electrónico y moderniza tu negocio.',
  },
];

export default function Home() {
  return (
    <div style={{ background: '#fff', fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* HERO */}
      <section style={{ padding: '48px 0 32px 0', textAlign: 'center' }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: 16,
        }}>
          CashLink: Tu dinero,{' '}
          <span style={{ color: gold }}>donde quieras</span>
          {' '}y cuando quieras
        </h1>
        <p style={{ fontSize: '1.13rem', color: '#666', marginBottom: 24 }}>
          La primera billetera digital que convierte tu comunidad en una red segura de cajeros distribuidos.
        </p>
        <div style={{ marginBottom: 32 }}>
          <button style={{
            background: gold,
            color: '#222',
            border: 'none',
            borderRadius: 8,
            padding: '12px 24px',
            fontWeight: 600,
            fontSize: 16,
            marginRight: 12,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          }}>
            Descargar App
          </button>
          <button style={{
            background: '#fff',
            color: '#222',
            border: '1px solid #222',
            borderRadius: 8,
            padding: '12px 24px',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
          }}>
            Conocer más
          </button>
        </div>
        <div style={{
          background: '#FFF7EC',
          borderRadius: 16,
          display: 'inline-block',
          padding: 24,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}>
          <img
            src="/assets/cashlink-phone.png"
            alt="CashLink App"
            style={{ width: 320, maxWidth: '90vw', borderRadius: 12 }}
          />
        </div>
      </section>

      {/* PROBLEMAS QUE RESOLVEMOS */}
      <section style={{ maxWidth: 1050, margin: '64px auto 0', padding: '0 16px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: 8 }}>
          Problemas que resolvemos
        </h2>
        <p style={{ color: '#666', textAlign: 'center', marginBottom: 36 }}>
          Identificamos los desafíos financieros más comunes en Colombia
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          flexWrap: 'wrap',
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              padding: 28,
              minWidth: 260,
              maxWidth: 340,
              flex: '1 1 260px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <span style={{
                fontSize: 28,
                background: gold,
                borderRadius: 50,
                padding: '8px 14px',
                marginBottom: 18,
                color: '#fff',
                display: 'inline-block',
              }}>{f.icon}</span>
              <h3 style={{
                fontWeight: 700,
                fontSize: '1.09rem',
                marginBottom: 8,
              }}>{f.title}</h3>
              <p style={{ color: '#666', fontSize: 16 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NUESTRA SOLUCIÓN */}
      <section style={{ maxWidth: 1050, margin: '64px auto 0', padding: '0 16px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: 8 }}>
          Nuestra solución
        </h2>
        <p style={{ color: '#666', textAlign: 'center', marginBottom: 36 }}>
          CashLink es una billetera digital que permite intercambiar efectivo y dinero digital en cualquier momento
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: 28 }}>
          {solution.map((s, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 18,
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              padding: '32px 24px',
              marginBottom: 0,
              minHeight: 140,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 22,
            }}>
              <span style={{
                fontSize: 38,
                background: gold,
                borderRadius: 50,
                padding: '12px 16px',
                color: '#fff',
                marginRight: 12,
                display: 'inline-block',
                minWidth: 48,
                textAlign: 'center',
              }}>{s.icon}</span>
              <div>
                <h3 style={{
                  fontWeight: 700,
                  fontSize: '1.13rem',
                  marginBottom: 8,
                }}>{s.title}</h3>
                <ul style={{
                  color: '#666',
                  fontSize: 16,
                  paddingLeft: 20,
                  margin: 0,
                }}>
                  {s.desc.map((d, j) => (<li key={j} style={{ marginBottom: 3 }}>{d}</li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FUNCIONES BÁSICAS DE BILLETERA */}
      <section style={{ maxWidth: 1050, margin: '64px auto 0', padding: '0 16px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: 8 }}>
          Funciones básicas de billetera
        </h2>
        <p style={{ color: '#666', textAlign: 'center', marginBottom: 36 }}>
          Todas las funcionalidades que esperas de una billetera digital moderna
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 24,
        }}>
          {walletFeatures.map((w, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              padding: 28,
              minHeight: 120,
            }}>
              <h3 style={{
                fontWeight: 700,
                fontSize: '1.09rem',
                marginBottom: 8,
              }}>{w.title}</h3>
              <p style={{ color: '#666', fontSize: 16 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEGURIDAD REFORZADA */}
      <section style={{ maxWidth: 1050, margin: '64px auto 0', padding: '0 16px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: 8 }}>
          Seguridad reforzada
        </h2>
        <p style={{ color: '#666', textAlign: 'center', marginBottom: 36 }}>
          Tu seguridad es nuestra prioridad, con múltiples capas de protección
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 24,
        }}>
          {security.map((s, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              padding: 28,
              minHeight: 80,
            }}>
              <h3 style={{
                fontWeight: 700,
                fontSize: '1.09rem',
                marginBottom: 8,
              }}>{s.title}</h3>
              <p style={{ color: '#666', fontSize: 16 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS PARA COMERCIOS ALIADOS */}
      <section style={{ maxWidth: 1050, margin: '64px auto 0', padding: '0 16px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: 8 }}>
          Beneficios para comercios aliados
        </h2>
        <p style={{ color: '#666', textAlign: 'center', marginBottom: 32 }}>
          Únete a nuestra red y obtén beneficios exclusivos
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 28,
          flexWrap: 'wrap',
        }}>
          {commerce.map((c, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              padding: 28,
              minWidth: 240,
              maxWidth: 320,
              flex: '1 1 240px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <span style={{
                fontSize: 28,
                background: gold,
                borderRadius: 50,
                padding: '8px 14px',
                marginBottom: 18,
                color: '#fff',
                display: 'inline-block',
              }}>{c.icon}</span>
              <h3 style={{
                fontWeight: 700,
                fontSize: '1.09rem',
                marginBottom: 8,
              }}>{c.title}</h3>
              <p style={{ color: '#666', fontSize: 16 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ÚNETE A LA REVOLUCIÓN */}
      <section style={{
        background: '#111',
        color: '#fff',
        marginTop: 72,
        padding: '48px 0 24px 0',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '1.3rem',
          fontWeight: 700,
          marginBottom: 16,
        }}>
          Únete a la revolución financiera
        </h2>
        <p style={{ color: '#ccc', marginBottom: 28 }}>
          Forma parte de la red de confianza más grande de Colombia
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0,
          maxWidth: 380,
          margin: '0 auto',
        }}>
          <button style={{
            background: gold,
            color: '#222',
            border: 'none',
            borderRadius: '8px 0 0 8px',
            padding: '12px 24px',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          }}>
            Únete a la red CashLink
          </button>
          <input
            type="email"
            placeholder="Correo electrónico"
            style={{
              border: 'none',
              borderRadius: '0 8px 8px 0',
              padding: '12px 16px',
              fontSize: 16,
              outline: 'none',
              width: 180,
            }}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#222',
        color: '#fff',
        padding: '32px 0 18px 0',
        textAlign: 'center',
        fontSize: 16,
      }}>
        <div style={{ marginBottom: 14 }}>
          CashLink Colombia ·{' '}
          <a href="#" style={{ color: gold, textDecoration: 'underline', margin: '0 8px' }}>
            Términos y Condiciones
          </a>
          ·{' '}
          <a href="#" style={{ color: gold, textDecoration: 'underline', margin: '0 8px' }}>
            Política de Privacidad
          </a>
        </div>
        <div style={{ color: '#888', fontSize: 14 }}>
          © 2024 CashLink Colombia
        </div>
      </footer>
    </div>
  );
}
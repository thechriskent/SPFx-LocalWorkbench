import React, { FC, useRef, useEffect } from 'react';

interface ICustomFieldComponentProps {
    field: any;
    value: any;
    onChange: (value: any) => void;
}

export const CustomFieldComponent: FC<ICustomFieldComponentProps> = ({
    field,
    value,
    onChange
}) => {
    // Custom fields can render their own content
    if (field.properties.onRender && typeof field.properties.onRender === 'function') {
        const containerRef = useRef<HTMLDivElement>(null);
        
        useEffect(() => {
            if (containerRef.current) {
                try {
                    field.properties.onRender(containerRef.current, value, onChange);
                } catch (e: any) {
                    console.error('PropertyPane - Custom field render error:', e);
                }
            }
        }, [field, value, onChange]);

        return <div className="pp-field" ref={containerRef}></div>;
    }

    // Fallback for custom fields without onRender
    return (
        <div className="pp-field">
            <div style={{ color: '#605e5c', fontStyle: 'italic' }}>
                Custom Field {field.properties.key || ''}
            </div>
        </div>
    );
};
